"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { Copy, PartyPopper } from "lucide-react";

export default function Home() {
  const [message, setMessage] = useState("This is a sample notification!");
  const [delay, setDelay] = useState(2);
  const [configCode, setConfigCode] = useState("");
  const { toast } = useToast();

  const handlePreview = () => {
    toast({
      title: "Preview Scheduled",
      description: `Your pop-up will appear in ${delay} second${
        delay === 1 ? "" : "s"
      }.`,
    });
    setTimeout(() => {
      toast({
        title: "Pop-Up Preview",
        description: message,
      });
    }, delay * 1000);
  };

  const handleExport = () => {
    const config = {
      message: message,
      delaySeconds: delay,
    };
    const code = JSON.stringify(config, null, 2);
    setConfigCode(code);
    toast({
      title: "Configuration Exported",
      description: "Scroll down to see the exported configuration.",
    });
  };

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(configCode);
      toast({
        title: "Copied!",
        description: "The configuration has been copied to your clipboard.",
      });
    }
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-xl space-y-8">
        <Card className="shadow-lg">
          <CardHeader className="items-center space-y-2 text-center">
            <PartyPopper className="h-12 w-12 text-primary" />
            <CardTitle className="text-4xl font-extrabold tracking-tight">
              PopUp Forge
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Craft and preview custom pop-up notifications with ease.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 px-6 pt-2 pb-6">
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="message" className="font-semibold">
                Notification Message
              </Label>
              <Input
                id="message"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter notification text..."
              />
            </div>
            <div className="grid w-full items-center gap-4">
              <div className="flex justify-between">
                <Label htmlFor="delay" className="font-semibold">
                  Display Delay
                </Label>
                <span className="w-16 rounded-md bg-muted px-2 py-1 text-center text-sm font-medium text-muted-foreground">
                  {delay}s
                </span>
              </div>
              <Slider
                id="delay"
                value={[delay]}
                onValueChange={(value) => setDelay(value[0])}
                max={10}
                step={0.5}
                className="w-full"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-center gap-4 p-6 pt-0">
            <Button size="lg" onClick={handlePreview}>
              Preview Pop-up
            </Button>
            <Button size="lg" variant="outline" onClick={handleExport}>
              Export Configuration
            </Button>
          </CardFooter>
        </Card>

        {configCode && (
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-semibold">
                Configuration Code
              </CardTitle>
              <Button variant="ghost" size="icon" onClick={handleCopy}>
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy code</span>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-muted p-4">
                <pre className="overflow-x-auto text-sm">
                  <code className="font-code text-muted-foreground">
                    {configCode}
                  </code>
                </pre>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
}
