import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useGetOffers, usePostOffer } from "@/hooks/useQueries";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { ExternalLink, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const SKELETON_KEYS = ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"];

interface OfferForm {
  contactName: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function Offers() {
  useSeoMeta({
    title: "Community Offers & Deals | Desert Lilly Health & Beauty Brisbane",
    description:
      "Browse and post local beauty and business offers. Share your company's promotions with the Desert Lilly community in Brisbane!",
  });

  const { data: offers, isLoading } = useGetOffers();
  const { mutate: postOffer, isPending } = usePostOffer();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<OfferForm>({
    contactName: "",
    title: "",
    description: "",
    imageUrl: "",
    link: "",
  });

  const handleChange = (field: keyof OfferForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    postOffer(form, {
      onSuccess: () => {
        toast.success("Your offer has been posted! 🎉");
        setForm({
          contactName: "",
          title: "",
          description: "",
          imageUrl: "",
          link: "",
        });
        setShowForm(false);
      },
      onError: () => {
        toast.error("Something went wrong. Please try again!");
      },
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="rose-gradient py-16 text-center">
        <p className="text-gold text-sm tracking-widest uppercase mb-3">
          Brisbane Community
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
          Community Offers & Deals
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Share your business's special offers with our Brisbane beauty
          community. No login needed — just post and go!
        </p>
        <Button
          onClick={() => setShowForm(!showForm)}
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90"
          data-ocid="offers.open_modal_button"
        >
          <Plus size={18} className="mr-2" />
          {showForm ? "Hide Form" : "Post Your Offer"}
        </Button>
      </section>

      {/* Post form */}
      {showForm && (
        <section
          className="container mx-auto px-4 py-10 max-w-xl"
          data-ocid="offers.panel"
        >
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="font-display text-2xl">
                Post Your Offer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contactName">Business / Your Name *</Label>
                  <Input
                    id="contactName"
                    required
                    placeholder="Bella's Beauty Supplies"
                    value={form.contactName}
                    onChange={(e) =>
                      handleChange("contactName", e.target.value)
                    }
                    data-ocid="offers.input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="offerTitle">Offer Title *</Label>
                  <Input
                    id="offerTitle"
                    required
                    placeholder="20% off all skin care products!"
                    value={form.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                    data-ocid="offers.input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="offerDesc">Description *</Label>
                  <Textarea
                    id="offerDesc"
                    required
                    placeholder="Tell us about your offer..."
                    rows={3}
                    value={form.description}
                    onChange={(e) =>
                      handleChange("description", e.target.value)
                    }
                    data-ocid="offers.textarea"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="imageUrl">Image URL (optional)</Label>
                  <Input
                    id="imageUrl"
                    type="url"
                    placeholder="https://example.com/image.jpg"
                    value={form.imageUrl}
                    onChange={(e) => handleChange("imageUrl", e.target.value)}
                    data-ocid="offers.input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="offerLink">Website / Link (optional)</Label>
                  <Input
                    id="offerLink"
                    type="url"
                    placeholder="https://yourwebsite.com.au"
                    value={form.link}
                    onChange={(e) => handleChange("link", e.target.value)}
                    data-ocid="offers.input"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  data-ocid="offers.submit_button"
                >
                  {isPending ? "Posting..." : "Post Offer"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Offers grid */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="font-display text-2xl text-foreground mb-8">
          Latest Offers
        </h2>
        {isLoading ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="offers.loading_state"
          >
            {SKELETON_KEYS.map((k) => (
              <Card key={k} className="overflow-hidden">
                <Skeleton className="h-48" />
                <CardContent className="p-4 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : offers && offers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer, i) => (
              <Card
                key={String(offer.id)}
                className="overflow-hidden shadow-card hover:shadow-rose transition-shadow"
                data-ocid={`offers.item.${i + 1}`}
              >
                {offer.imageUrl && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={offer.imageUrl}
                      alt={`${offer.title} — offer by ${offer.contactName}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <CardContent className="p-5">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {offer.contactName}
                  </p>
                  <h3 className="font-display text-lg text-foreground mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {offer.description}
                  </p>
                  {offer.link && (
                    <a
                      href={offer.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:underline"
                      data-ocid="offers.link"
                    >
                      View Offer <ExternalLink size={14} />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20" data-ocid="offers.empty_state">
            <p className="text-4xl mb-4">🌸</p>
            <h3 className="font-display text-xl text-foreground mb-2">
              No offers yet!
            </h3>
            <p className="text-muted-foreground">
              Be the first to post your offer to the Brisbane beauty community.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
