"use client";

import React, { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function LanguageSuggestionPopup() {
  const { language, setLanguage, t } = useLanguage();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only check once per session/visit
    const hasChecked = sessionStorage.getItem("lang_checked");
    if (hasChecked || language === "en") return;

    // Fast timezone check
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const isIndonesia = tz.startsWith("Asia/Jakarta") || 
                        tz.startsWith("Asia/Makassar") || 
                        tz.startsWith("Asia/Jayapura") || 
                        tz.startsWith("Asia/Pontianak");
                        
    if (!isIndonesia) {
      // Suggest English if outside Indonesia
      setTimeout(() => setShow(true), 2000);
    }
    
    sessionStorage.setItem("lang_checked", "true");
  }, [language]);

  const handleSwitch = () => {
    setLanguage("en");
    setShow(false);
  };

  return (
    <Dialog open={show} onOpenChange={setShow}>
      <DialogContent className="sm:max-w-md bg-slate-950 border-white/10 text-white shadow-2xl rounded-2xl">
        <DialogHeader className="text-left">
          <div className="flex items-center gap-4 mb-2">
            <div className="bg-yellow-500/20 text-yellow-400 p-2 rounded-full shrink-0">
              <Globe size={24} />
            </div>
            <DialogTitle className="text-xl font-bold text-white">Language Suggestion</DialogTitle>
          </div>
          <DialogDescription className="text-slate-300 text-sm leading-relaxed mt-2">
            {t('popup.message')}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-row sm:justify-end gap-2 mt-6">
          <Button type="button" variant="outline" onClick={() => setShow(false)} className="w-full sm:w-auto bg-white/5 border-white/10 hover:bg-white/10 text-white hover:text-white rounded-full">
            {t('popup.dismiss')}
          </Button>
          <Button type="button" onClick={handleSwitch} className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold rounded-full">
            {t('popup.switch')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
