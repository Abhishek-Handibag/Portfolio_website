import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { Mail, Linkedin, Github } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    try {
      await axios.post("/api/save-message", data); // Send data to the new endpoint
      console.log("Message saved successfully!");
      reset(); // Reset the form after successful submission
      toast.success("Message Sent Successfully!");
    } catch (error) {
      console.error("Error saving message:", error);
      toast.error("Something went wrong! Try again.");
    }
  };

  return (
    <section id="contact" className="py-20">
      <ToastContainer />
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Get in Touch"
          subtitle="Let's discuss your next project"
        />

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      className="min-h-[150px]"
                      {...register("message", { required: true })}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Connect With Me</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:abhishek.handibag12@gmail.com"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5 mr-3" />
                abhishek.handibag12@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-handibag/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5 mr-3" />
                LinkedIn
              </a>
              <a
                href="https://github.com/Abhishek-Handibag/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5 mr-3" />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
