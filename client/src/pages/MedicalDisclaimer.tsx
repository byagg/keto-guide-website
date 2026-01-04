import { AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function MedicalDisclaimer() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <AlertTriangle className="mx-auto mb-6" size={48} />
            <h1 className="mb-6">Medical Disclaimer</h1>
            <p className="text-xl text-white/90">Important health information</p>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="editorial-card bg-accent/10 border-accent mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="text-accent flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="text-xl font-bold mb-3">Not Medical Advice</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The information provided on KetoMindset is for educational and informational purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or dietary changes.
                </p>
              </div>
            </div>
          </Card>

          <div className="prose prose-lg max-w-none">
            <h2>General Information</h2>
            <p>
              The content on this website, including but not limited to text, graphics, images, and other material, is provided for general informational purposes only. While we strive to provide accurate and up-to-date information based on current scientific research, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information.
            </p>

            <h2>Consult Your Healthcare Provider</h2>
            <p>
              Before starting any new diet, including the ketogenic diet, you should consult with a qualified healthcare professional, especially if you:
            </p>
            <ul>
              <li>Have any pre-existing medical conditions (diabetes, heart disease, kidney disease, liver disease, etc.)</li>
              <li>Are taking any medications</li>
              <li>Are pregnant or breastfeeding</li>
              <li>Have a history of eating disorders</li>
              <li>Are under 18 years of age</li>
              <li>Have any concerns about your health</li>
            </ul>

            <h2>No Doctor-Patient Relationship</h2>
            <p>
              The use of this website and the information contained herein does not create a doctor-patient relationship between you and KetoMindset, its authors, or contributors. You should not rely on the information on this website as an alternative to medical advice from your doctor or other professional healthcare provider.
            </p>

            <h2>Individual Results May Vary</h2>
            <p>
              The ketogenic diet affects individuals differently. Results, benefits, and side effects mentioned on this website are based on general research and may not apply to your specific situation. Your individual results will depend on many factors including your starting health status, adherence to the diet, genetics, and other lifestyle factors.
            </p>

            <h2>Potential Risks</h2>
            <p>
              The ketogenic diet may not be suitable for everyone and may have potential risks or side effects. Some people may experience:
            </p>
            <ul>
              <li>Keto flu symptoms (fatigue, headache, nausea)</li>
              <li>Digestive issues</li>
              <li>Changes in cholesterol levels</li>
              <li>Nutrient deficiencies if not properly planned</li>
              <li>Other adverse effects</li>
            </ul>
            <p>
              If you experience any concerning symptoms while following a ketogenic diet, discontinue the diet and consult your healthcare provider immediately.
            </p>

            <h2>Medication Interactions</h2>
            <p>
              The ketogenic diet can affect how your body processes certain medications, particularly:
            </p>
            <ul>
              <li>Diabetes medications (insulin, oral hypoglycemics)</li>
              <li>Blood pressure medications</li>
              <li>Diuretics</li>
              <li>Other medications</li>
            </ul>
            <p>
              If you are taking any medications, consult your doctor before starting a ketogenic diet. Dosage adjustments may be necessary, and close monitoring is essential.
            </p>

            <h2>Emergency Situations</h2>
            <p>
              If you experience severe symptoms such as chest pain, difficulty breathing, severe abdominal pain, or other medical emergencies, seek immediate medical attention. Do not rely on information from this website in emergency situations.
            </p>

            <h2>Third-Party Content</h2>
            <p>
              This website may contain links to third-party websites or reference third-party research. KetoMindset is not responsible for the accuracy, content, or practices of any third-party websites or sources.
            </p>

            <h2>Updates and Changes</h2>
            <p>
              Medical and nutritional science is constantly evolving. Information on this website may become outdated as new research emerges. We strive to update our content regularly, but we cannot guarantee that all information is current at all times.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              By using this website, you agree that KetoMindset, its authors, contributors, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the information provided, including but not limited to any health issues, injuries, or adverse effects resulting from following the dietary advice or information on this website.
            </p>

            <h2>Acknowledgment</h2>
            <p>
              By using this website, you acknowledge that you have read this Medical Disclaimer and agree to its terms. You understand that the information provided is not medical advice and that you are responsible for consulting with qualified healthcare professionals before making any health-related decisions.
            </p>

            <div className="bg-accent/10 p-6 rounded-xl mt-8">
              <p className="text-center font-semibold text-lg mb-2">
                ⚠️ When in Doubt, Consult a Professional
              </p>
              <p className="text-center text-muted-foreground">
                Your health is too important to leave to chance. Always consult with qualified healthcare professionals before making significant dietary changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
