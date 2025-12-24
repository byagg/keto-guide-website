import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Star, ExternalLink, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Sidebar() {
    return (
        <div className="space-y-8">
            {/* Bio / Trust Widget */}
            <Card className="border-2 border-gray-200 shadow-sm">
                <CardHeader className="bg-gray-50 pb-4">
                    <CardTitle className="text-xl font-bold text-center">About KetoMindset</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 font-medium text-gray-700">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden border-2 border-white shadow-md">
                        <img src="/images/keto_hero_v2.png" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-sm text-center mb-4">
                        Hi! We help people lose weight and regain energy without the complexity. Our guides are simple, science-backed, and effective.
                    </p>
                    <Link href="/guide">
                        <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary hover:text-white transition-colors">
                            Read Our Story »
                        </Button>
                    </Link>
                </CardContent>
            </Card>

            {/* Sticky Opt-in - High Conversion */}
            <div className="sticky top-24">
                <Card className="border-4 border-yellow-400 shadow-xl overflow-hidden">
                    <div className="bg-yellow-400 p-3 text-center">
                        <h3 className="font-extrabold text-black uppercase tracking-wide text-lg">⚠️ Free Download</h3>
                    </div>
                    <CardContent className="pt-6 space-y-4 bg-white">
                        <h4 className="font-bold text-xl leading-tight text-center">
                            The 7-Day "Lazy Keto" Meal Plan
                        </h4>
                        <p className="text-sm text-gray-600 text-center">
                            Stop guessing what to eat. Get our exact shopping list and recipes.
                        </p>
                        <div className="space-y-2">
                            <Input placeholder="Enter your email address..." className="border-gray-300" />
                            <Button className="w-full font-bold text-lg bg-red-600 hover:bg-red-700 text-white shadow-md h-12">
                                Send It To Me! <Mail className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                        <p className="text-xs text-center text-gray-400">
                            🔒 100% Secure. Unsubscribe anytime.
                        </p>
                    </CardContent>
                </Card>

                {/* Affiliate Offers Widget */}
                <Card className="mt-8 border-2 border-gray-100 shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold">Top Recommended Tools</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <a href="#" className="flex items-start gap-3 group hover:bg-gray-50 p-2 rounded-lg transition-colors">
                            <div className="bg-blue-100 p-2 rounded-md group-hover:bg-blue-200">
                                <ExternalLink className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                                <h5 className="font-bold text-sm group-hover:text-blue-600 text-gray-900">Keto Mojo Meter</h5>
                                <p className="text-xs text-gray-500">Track your ketones accurately.</p>
                            </div>
                        </a>

                        <a href="#" className="flex items-start gap-3 group hover:bg-gray-50 p-2 rounded-lg transition-colors">
                            <div className="bg-green-100 p-2 rounded-md group-hover:bg-green-200">
                                <Star className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                                <h5 className="font-bold text-sm group-hover:text-green-600 text-gray-900">Perfect Keto Collagen</h5>
                                <p className="text-xs text-gray-500">Joint support & gut health.</p>
                            </div>
                        </a>

                        <a href="#" className="flex items-start gap-3 group hover:bg-gray-50 p-2 rounded-lg transition-colors">
                            <div className="bg-purple-100 p-2 rounded-md group-hover:bg-purple-200">
                                <ExternalLink className="h-5 w-5 text-purple-600" />
                            </div>
                            <div>
                                <h5 className="font-bold text-sm group-hover:text-purple-600 text-gray-900">Electrolyte Powder</h5>
                                <p className="text-xs text-gray-500">Banishes keto flu fast.</p>
                            </div>
                        </a>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
