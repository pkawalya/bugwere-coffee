"use client";

import {
  Coffee, Sprout, Bird, Wheat, Heart, ArrowRight,
  Leaf, Shield, PiggyBank, ShoppingBag, Microscope, CheckCircle2, Users,
  BookOpen, HeartHandshake, Sun, Droplets, TrendingUp, ShieldCheck,
  Clock, Coins, Eye, Lightbulb, Target, Handshake, Globe, Send,
  Mail, UserPlus, Phone, Quote, ShoppingBasket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Coffee,
  Sprout,
  Bird,
  Wheat,
  Heart,
  ArrowRight,
  Leaf,
  Shield,
  PiggyBank,
  ShoppingBag,
  Microscope,
  CheckCircle2,
  Users,
  BookOpen,
  HeartHandshake,
  Sun,
  Droplets,
  TrendingUp,
  ShieldCheck,
  Clock,
  Coins,
  Eye,
  Lightbulb,
  Target,
  Handshake,
  Globe,
  Send,
  Mail,
  UserPlus,
  Phone,
  Quote,
  ShoppingBasket,
};

export function getIcon(name: string, className?: string): React.ReactNode {
  const IconComponent = ICON_MAP[name];
  if (!IconComponent) return <Heart className={className || "w-5 h-5"} />;
  return <IconComponent className={className || "w-5 h-5"} />;
}

export function getIconComponent(name: string): LucideIcon {
  return ICON_MAP[name] || Heart;
}
