"use client";

import React, { useState } from "react";
import { Drawer } from "vaul";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    const response = await fetch("/api/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message envoyé !");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Erreur lors de l'envoi.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input 
        type="text" 
        name="name" 
        placeholder="Votre nom" 
        value={formData.name} 
        onChange={handleChange} 
        required 
      />
      <Input 
        type="email" 
        name="email" 
        placeholder="Votre email" 
        value={formData.email} 
        onChange={handleChange} 
        required 
      />
      <Textarea 
        name="message" 
        placeholder="Votre message" 
        value={formData.message} 
        onChange={handleChange} 
        required 
      />
      <Button type="submit" className="w-full bg-primary text-white">
        Envoyer
      </Button>
      {status && <p className="text-sm text-gray-500">{status}</p>}
    </form>
  );
};

const DrawerContent = () => (
  <Drawer.Content
    className={clsx(
      "bg-white flex fixed p-6",
      "rounded-t-[10px] flex-col h-[60%] bottom-0 left-0 right-0"
    )}
  >
    <div className="w-full h-full flex flex-col gap-6">
      <div className="rounded-full bg-primary mx-auto w-12 h-1.5" />
      <h2 className="text-lg font-semibold text-center">Contactez-nous</h2>
      <ContactForm />
    </div>
  </Drawer.Content>
);

export default function DrawerHumbee({ onDrawerToggle }: { onDrawerToggle?: (isOpen: boolean) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer.Root
      shouldScaleBackground
      direction="bottom"
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        onDrawerToggle?.(open);
      }}
    >
      <Drawer.Trigger asChild>
        <button
          className="absolute top-3 right-14 focus:outline-none"
          aria-label="Contact"
        >
          <Mail className="h-6 w-6 text-white" />
        </button>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <DrawerContent />
      </Drawer.Portal>
    </Drawer.Root>
  );
}