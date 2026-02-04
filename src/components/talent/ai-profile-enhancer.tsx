
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { talentProfileEnhancement, TalentProfileEnhancementOutput } from '@/ai/flows/talent-profile-enhancement';
import { Sparkles, Loader2, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AIProfileEnhancerProps {
  initialText: string;
  onApply: (text: string) => void;
}

export function AIProfileEnhancer({ initialText, onApply }: AIProfileEnhancerProps) {
  const [inputText, setInputText] = useState(initialText);
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<TalentProfileEnhancementOutput | null>(null);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleEnhance = async () => {
    if (!inputText.trim()) {
      toast({
        title: "Input required",
        description: "Please enter some profile text to enhance.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const result = await talentProfileEnhancement({
        profileText: inputText,
      });
      setSuggestion(result);
    } catch (error) {
      toast({
        title: "Enhancement failed",
        description: "Something went wrong while connecting to the AI service.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (suggestion) {
      navigator.clipboard.writeText(suggestion.suggestedProfileText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: "Copied",
        description: "Suggested text copied to clipboard."
      });
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Your Current Bio</label>
        <Textarea 
          placeholder="Describe your experience, goals, and unique traits..." 
          className="min-h-[200px] resize-none border-primary/20 focus:border-primary"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button 
          onClick={handleEnhance} 
          disabled={loading}
          className="w-full h-12 text-lg font-bold"
        >
          {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Sparkles className="mr-2 h-5 w-5" />}
          {loading ? 'Analyzing Profile...' : 'Enhance with AI'}
        </Button>
      </div>

      <div className="relative">
        {suggestion ? (
          <Card className="h-full border-primary/30 bg-primary/5">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-1">
                <CardTitle className="text-primary flex items-center gap-2">
                  <Sparkles className="h-5 w-5" /> 
                  AI Suggestion
                </CardTitle>
                <CardDescription>Professionally polished for maximum visibility.</CardDescription>
              </div>
              <Button variant="ghost" size="icon" onClick={handleCopy}>
                {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-white rounded-lg border text-sm leading-relaxed italic text-muted-foreground">
                "{suggestion.suggestedProfileText}"
              </div>
              
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-secondary flex items-center gap-1">
                   Photography Tips
                </h4>
                <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/10 text-sm">
                  {suggestion.suggestedProfilePhotoImprovements}
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full border-primary text-primary hover:bg-primary hover:text-white font-bold"
                onClick={() => onApply(suggestion.suggestedProfileText)}
              >
                Apply Enhancement
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="h-full border-2 border-dashed rounded-xl flex flex-col items-center justify-center p-12 text-center text-muted-foreground bg-muted/20">
            <Sparkles className="h-12 w-12 mb-4 opacity-20" />
            <p className="font-medium">Get personalized AI recommendations to improve your visibility.</p>
            <p className="text-sm">Click "Enhance with AI" to see suggestions.</p>
          </div>
        )}
      </div>
    </div>
  );
}
