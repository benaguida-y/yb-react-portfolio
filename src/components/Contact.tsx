import emailjs from "emailjs-com";
import { useState } from 'react';
import { toast } from 'sonner';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Send, Linkedin } from 'lucide-react';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs
            .send(
                "ynss.beng",   // Template ID
                "template_a1xs75q",  // Template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                "ShzWJiW8kyrcsGk9P"    // Public KEY
            )
            .then(
                () => {
                    toast.success("Message sent!", {
                        description: "Thank you for your message. We'll get back to you soon.",
                    });
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    toast.error("Failed to send message", {
                        description: error.text,
                    });
                }
            );
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="contact" className="py-20 border-t">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0f1720]">
                        Get In <span className="text-[#1e293b]">Touch</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Let's start a conversation</h3>
                            <p className="text-muted-foreground mb-8">
                                Whether you have a project in mind, need consultation, or just want to connect,
                                I'd love to hear from you. Let's create something amazing together.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Mail className="h-5 w-5 text-yellow-500 " />
                                </div>
                                <div>
                                    <p className="font-medium">Email</p>
                                    <a
                                        href="mailto:yns.benaguida@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground"
                                    >
                                        yns.benaguida@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Linkedin className="h-5 w-5 text-blue-500" />
                                </div>
                                <div>
                                    <p className="font-medium">LinkedIn</p>
                                    <a
                                        href="https://www.linkedin.com/in/youness-benaguida-115664348"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground"
                                    >
                                        Youness Benaguida
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <MapPin className="h-5 w-5 text-red-500" />
                                </div>
                                <div>
                                    <p className="font-medium">Location</p>
                                    <p className="text-muted-foreground">Casablanca, Morocco</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <Card className="p-8 shadow-card ">
                        <CardContent className="p-0 ">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project or just say hello..."
                                        rows={5}
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full cursor-pointer bg-[#0f1720] hover:bg-[#1e293b] hover:opacity-90 transition-opacity text-lg py-6"
                                >
                                    Send Message
                                    <Send className="h-5 w-5 mr-2" />
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Contact;