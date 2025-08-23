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
import { Separator } from "@/components/ui/separator";
import { Copy, PartyPopper, Github, Linkedin, Instagram, Codepen, Mail } from "lucide-react";

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
    <div className="flex min-h-screen w-full flex-col dark">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                 <PartyPopper className="h-16 w-16 text-primary" />
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  PopUp Forge
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Craft, customize, and preview your pop-up notifications in real-time. Export the configuration and integrate it into your projects seamlessly.
                </p>
              </div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Customize Your Pop-up</CardTitle>
                  <CardDescription>
                    Adjust the settings below to see a live preview.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
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
                <CardFooter className="flex justify-start gap-4 p-6 pt-0">
                  <Button size="lg" onClick={handlePreview}>
                    Preview Pop-up
                  </Button>
                  <Button size="lg" variant="outline" onClick={handleExport}>
                    Export Configuration
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {configCode && (
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <Card className="mx-auto max-w-5xl shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-semibold">
                    Exported Configuration
                  </CardTitle>
                  <Button variant="ghost" size="icon" onClick={handleCopy}>
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copy code</span>
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg bg-background p-4">
                    <pre className="overflow-x-auto text-sm">
                      <code className="font-code">
                        {configCode}
                      </code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 PopUp Forge. All rights reserved.</p>
        <div className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="https://www.instagram.com/girish_lade_/" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline underline-offset-4">
            <Instagram className="h-5 w-5 hover:text-primary" />
          </a>
          <a href="https://www.linkedin.com/in/girish-lade-075bba201/" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline underline-offset-4">
            <Linkedin className="h-5 w-5 hover:text-primary" />
          </a>
          <a href="https://github.com/girishlade111" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline underline-offset-4">
            <Github className="h-5 w-5 hover:text-primary" />
          </a>
          <a href="https://codepen.io/Girish-Lade-the-looper" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline underline-offset-4">
            <Codepen className="h-5 w-5 hover:text-primary" />
          </a>
          <a href="mailto:girishlade111@gmail.com" className="text-xs hover:underline underline-offset-4">
            <Mail className="h-5 w-5 hover:text-primary" />
          </a>
        </div>
      </footer>
    </div>
  );
}
