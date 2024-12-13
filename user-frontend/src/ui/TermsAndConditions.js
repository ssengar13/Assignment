import React from "react";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import blogHeader from '../img/blog-header.jpg'

const TermsAndConditions = () => {
    return (
        <>
            <InnerHeader />
            <InnerHeaderBanner name={"Terms And Conditions"} img={blogHeader} />
            <div class="container mt-5 mb-5 py-5">
                <h2 class="text-center mb-4">Terms and Conditions</h2>

                <ul class="list-unstyled">
                    <li>
                        <p class="text-justify">
                            These Terms and Conditions, along with privacy policy or other terms (“Terms”) constitute a binding agreement by and between BOP CONSULTANCY AND SERVICES, (“Website Owner” or “we” or “us” or “our”) and you (“you” or “your”) and relate to your use of our website, goods (as applicable) or services (as applicable) (collectively, “Services”).
                        </p>
                    </li>

                    <li>
                        <p class="text-justify">
                            By using our website and availing the Services, you agree that you have read and accepted these Terms (including the Privacy Policy). We reserve the right to modify these Terms at any time and without assigning any reason. It is your responsibility to periodically review these Terms to stay informed of updates.
                        </p>
                    </li>

                    <li>
                        <p class="text-justify">
                            The use of this website or availing of our Services is subject to the following terms of use:
                        </p>
                    </li>

                    <li>
                        <ul class="list-unstyled">
                            <li>
                                <p class="text-justify"><strong>1. Account Information:</strong> To access and use the Services, you agree to provide true, accurate and complete information to us during and after registration, and you shall be responsible for all acts done through the use of your registered account.</p>
                            </li>
                            <li>
                                <p class="text-justify"><strong>2. Warranty and Accuracy:</strong> Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials offered on this website or through the Services, for any specific purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</p>
                            </li>
                            <li>
                                <p class="text-justify"><strong>3. Use at Your Own Risk:</strong> Your use of our Services and the website is solely at your own risk and discretion. You are required to independently assess and ensure that the Services meet your requirements.</p>
                            </li>
                            <li>
                                <p class="text-justify"><strong>4. Proprietary Content:</strong> The contents of the Website and the Services are proprietary to Us and you will not have any authority to claim any intellectual property rights, title, or interest in its contents.</p>
                            </li>
                            <li>
                                <p class="text-justify"><strong>5. Unauthorized Use:</strong> You acknowledge that unauthorized use of the Website or the Services may lead to action against you as per these Terms or applicable laws.</p>
                            </li>
                            <li>
                                <p class="text-justify"><strong>6. Payment for Services:</strong> You agree to pay us the charges associated with availing the Services.</p>
                            </li>
                            <li>
                                <p class="text-justify"><strong>7. Unlawful Use:</strong> You agree not to use the website and/ or Services for any purpose that is unlawful, illegal or forbidden by these Terms, or Indian or local laws that might apply to you.</p>
                            </li>
                            <li>
                                <p class="text-justify"><strong>8. Third-Party Links:</strong> You agree and acknowledge that website and the Services may contain links to other third party websites. On accessing these links, you will be governed by the terms of use, privacy policy and such other policies of such third party websites.</p>
                            </li>
                            <li>
                                <p class="text-justify"><strong>9. Binding Contract:</strong> You understand that upon initiating a transaction for availing the Services you are entering into a legally binding and enforceable contract with us for the Services.</p>
                            </li>
                            <li>
                                <p class="text-justify"><strong>10. Refunds:</strong> You shall be entitled to claim a refund of the payment made by you in case we are not able to provide the Service. The timelines for such return and refund will be according to the specific Service you have availed or within the time period provided in our policies (as applicable). In case you do not raise a refund claim within the stipulated time, this would make you ineligible for a refund.</p>
                            </li>
                            <li>
                                <p class="text-justify"><strong>11. Force Majeure:</strong> Notwithstanding anything contained in these Terms, the parties shall not be liable for any failure to perform an obligation under these Terms if performance is prevented or delayed by a force majeure event.</p>
                            </li>
                            <li>
                                <p class="text-justify"><strong>12. Governing Law:</strong> These Terms and any dispute or claim relating to it, or its enforceability, shall be governed by and construed in accordance with the laws of India.</p>
                            </li>
                            <li>
                                <p class="text-justify"><strong>13. Jurisdiction:</strong> All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in PUNE CITY, Maharashtra.</p>
                            </li>
                            <li>
                                <p class="text-justify"><strong>14. Communication:</strong> All concerns or communications relating to these Terms must be communicated to us using the contact information provided on this website.</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <Footer />
        </>
    );
};

export default TermsAndConditions;