import restaurant from "@/assets/portfolio-restaurant.jpg";
import ecommerce from "@/assets/portfolio-ecommerce.jpg";
import realestate from "@/assets/portfolio-realestate.jpg";
import healthcare from "@/assets/portfolio-healthcare.jpg";
import fashion from "@/assets/portfolio-fashion.jpg";
import local from "@/assets/portfolio-local.jpg";

export type Project = {
  slug: string;
  name: string;
  category: "Restaurant" | "E-Commerce" | "Real Estate" | "Healthcare" | "Fashion" | "Local Business";
  image: string;
  result: string;
  url: string;
};

export const projects: Project[] = [
  { slug: "ember-kitchen", name: "Ember Kitchen", category: "Restaurant", image: restaurant, result: "40% more bookings", url: "#" },
  { slug: "north-atelier", name: "North Atelier", category: "E-Commerce", image: ecommerce, result: "Revenue doubled", url: "#" },
  { slug: "loxine-estates", name: "Loxine Estates", category: "Real Estate", image: realestate, result: "3× qualified leads", url: "#" },
  { slug: "nova-care", name: "Nova Care Clinic", category: "Healthcare", image: healthcare, result: "60% more patient bookings", url: "#" },
  { slug: "forquary", name: "Forquary", category: "Fashion", image: fashion, result: "210% increase in sales", url: "#" },
  { slug: "cocal-cafe", name: "Cocal Café", category: "Local Business", image: local, result: "5× foot traffic from web", url: "#" },
];

export const categories = ["All", "Restaurant", "E-Commerce", "Real Estate", "Healthcare", "Fashion", "Local Business"] as const;
