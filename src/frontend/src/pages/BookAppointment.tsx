import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

const services = [
  "Hair Cut & Style",
  "Hair Colour & Highlights",
  "Blowout & Styling",
  "Hair Treatment",
  "Facial Treatment",
  "Chemical Peel",
  "Manicure",
  "Pedicure",
  "Gel / Acrylic Nails",
  "Nail Art",
  "Waxing — Body",
  "Brazilian / Bikini Wax",
  "Facial Waxing",
  "Makeup — Special Occasion",
  "Bridal Makeup",
  "Makeup Lesson",
  "Eyebrow Threading / Waxing",
  "Lash Extensions",
  "Lash Lift & Tint",
  "Other",
];

export default function BookAppointment() {
  useSeoMeta({
    title: "Book an Appointment | Desert Lilly Health & Beauty Brisbane",
    description:
      "Book your beauty appointment at Desert Lilly Health & Beauty in Brisbane. Hair, skin, nails, waxing, makeup & more. Easy online booking!",
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Appointment Request — ${form.service}`);
    const body = encodeURIComponent(
      `Hi Desert Lilly Team!\n\nI'd like to book an appointment. Here are my details:\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\nPreferred Date: ${form.date}\nPreferred Time: ${form.time}\nAdditional Notes: ${form.message}\n\nLooking forward to hearing from you!\n${form.name}`,
    );
    window.location.href = `mailto:desertlillybeauty@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="min-h-[60vh] flex items-center justify-center px-4"
        data-ocid="booking.success_state"
      >
        <div className="text-center max-w-md">
          <CheckCircle size={64} className="text-primary mx-auto mb-4" />
          <h1 className="font-display text-3xl text-foreground mb-3">
            Your email is ready!
          </h1>
          <p className="text-muted-foreground mb-6">
            Your email client should have opened with your booking request
            pre-filled. Just hit send and we'll be in touch heaps soon!
          </p>
          <p className="text-sm text-muted-foreground">
            Or WhatsApp us directly at{" "}
            <a
              href="https://wa.me/61420739265"
              className="text-primary underline"
            >
              0420 739 265
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="rose-gradient py-16 text-center">
        <p className="text-gold text-sm tracking-widest uppercase mb-3">
          Ready to Glow?
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
          Book Your Appointment
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Fill in your details below and we'll get you booked in heaps quick.
          Can't wait to see you!
        </p>
      </section>

      <section className="container mx-auto px-4 py-12 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name *</Label>
              <Input
                id="name"
                required
                placeholder="Jane Smith"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                data-ocid="booking.input"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="jane@example.com"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                data-ocid="booking.input"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                required
                placeholder="04XX XXX XXX"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                data-ocid="booking.input"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">Service *</Label>
              <Select
                required
                onValueChange={(v) => handleChange("service", v)}
              >
                <SelectTrigger data-ocid="booking.select">
                  <SelectValue placeholder="Choose a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Preferred Date *</Label>
              <Input
                id="date"
                type="date"
                required
                value={form.date}
                onChange={(e) => handleChange("date", e.target.value)}
                data-ocid="booking.input"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Preferred Time *</Label>
              <Input
                id="time"
                type="time"
                required
                value={form.time}
                onChange={(e) => handleChange("time", e.target.value)}
                data-ocid="booking.input"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Any additional notes?</Label>
            <Textarea
              id="message"
              placeholder="Tell us anything extra — allergies, special requests, or questions!"
              rows={4}
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              data-ocid="booking.textarea"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-rose"
            data-ocid="booking.submit_button"
          >
            Send Booking Request
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            This will open your email app with the booking details pre-filled.
            Prefer WhatsApp?{" "}
            <a
              href="https://wa.me/61420739265"
              className="text-primary underline"
            >
              Message us directly.
            </a>
          </p>
        </form>
      </section>
    </div>
  );
}
