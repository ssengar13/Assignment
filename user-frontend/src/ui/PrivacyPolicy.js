import React from "react";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import blogHeader from '../img/blog-header.jpg'

const PrivacyPolicy = () => {
    return (
        <>
            <InnerHeader />
            <InnerHeaderBanner name={"Privacy Policy"} img={blogHeader} />
            <div class="container mt-5 mb-5 py-5">
                <h2 class="text-center mb-4">Privacy Policy</h2>

                <ul class="list-unstyled">
                    <li>
                        <p class="text-justify">
                            <strong>Who we are</strong><br />
                            Our website address is: <a href="http://consultbop.com" target="_blank">http://consultbop.com</a>.
                        </p>
                    </li>

                    <li>
                        <p class="text-justify">
                            This privacy policy (“Policy”) relates to the manner BOP CONSULTANCY AND SERVICES (“we”, “us”, “our”) in which we use, handle, and process the data that you provide us in connection with using the products or services we offer. By using this website or by availing goods or services offered by us, you agree to the terms and conditions of this Policy, and consent to our use, storage, disclosure, and transfer of your information or data in the manner described in this Policy.
                        </p>
                    </li>

                    <li>
                        <p class="text-justify">
                            We are committed to ensuring that your privacy is protected by applicable laws and regulations. We urge you to acquaint yourself with this Policy to familiarize yourself with how your data is being handled by us.
                        </p>
                    </li>

                    <li>
                        <p class="text-justify mb-5">
                            BOP CONSULTANCY AND SERVICES may change this Policy periodically and we urge you to check this page for the latest version of the Policy in order to keep yourself updated.
                        </p>
                    </li>

                    <li>
                        <strong><p class="text-justify">What data is being collected</p></strong>
                        <p class="text-justify">
                            We may collect the following information from you:
                        </p>
                        <ul class="list-unstyled">
                            <li><p class="text-justify">Name</p></li>
                            <li><p class="text-justify">Contact information including address and email address</p></li>
                            <li><p class="text-justify">Demographic information or, preferences or interests</p></li>
                            <li><p class="text-justify">Personal Data or Other information relevant/ required for providing the goods or services to you</p></li>
                            <li><p class="text-justify">The meaning of Personal Data will be as defined under relevant Indian laws</p></li>
                        </ul>
                        <p class="text-justify mb-5">
                            Note: Notwithstanding anything under this Policy as required under applicable Indian laws, we will not be storing any credit card, debit card or any other similar card data of yours. Please also note that all data or information collected from you will be strictly in accordance with applicable laws and guidelines.
                        </p>
                    </li>

                    <li>
                        <strong><p class="text-justify">What we do with the data we gather</p></strong>
                        <p class="text-justify">
                            We require this data to provide you with the goods or services offered by us including but not limited, for the below set out purposes:
                        </p>
                        <ul class="list-unstyled">
                            <li><p class="text-justify">Internal record keeping.</p></li>
                            <li><p class="text-justify">For improving our products or services.</p></li>
                            <li><p class="text-justify">For providing updates to you regarding our products or services including any special offers.</p></li>
                            <li><p class="text-justify">To communicate information to you</p></li>
                            <li><p class="text-justify mb-5">For internal training and quality assurance purposes</p></li>
                        </ul>
                    </li>

                    <li>
                        <strong><p class="text-justify">Who do we share your data with</p></strong>
                        <p class="text-justify">
                            We may share your information or data with:
                        </p>
                        <ul class="list-unstyled">
                            <li><p class="text-justify">Third parties including our service providers in order to facilitate the provisions of goods or services to you, carry out your requests, respond to your queries, fulfil your orders or for other operational and business reasons.</p></li>
                            <li><p class="text-justify">With our group companies (to the extent relevant)</p></li>
                            <li><p class="text-justify">Our auditors or advisors to the extent required by them for performing their services</p></li>
                            <li><p class="text-justify mb-5">Governmental bodies, regulatory authorities, law enforcement authorities pursuant to our legal obligations or compliance requirements.</p></li>
                        </ul>
                    </li>

                    <li>
                        <strong><p class="text-justify">How we use cookies</p></strong>
                        <p class="text-justify mb-5">
                            We use “cookies” to collect information and to better understand customer behavior. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to avail our goods or services to the full extent. We do not control the use of cookies by third parties. The third party service providers have their own privacy policies addressing how they use such information.
                        </p>
                    </li>

                    <li>
                        <strong><p class="text-justify">Your rights relating to your data</p></strong>
                        <p class="text-justify">
                            <strong>Right to Review</strong> – You can review the data provided by you and can request us to correct or amend such data (to the extent feasible, as determined by us). That said, we will not be responsible for the authenticity of the data or information provided by you.
                        </p>
                        <p class="text-justify mb-5">
                            <strong>Withdrawal of your Consent</strong> – You can choose not to provide your data, at any time while availing our goods or services or otherwise withdraw your consent provided to us earlier, in writing to our email ID: <a href="mailto:accounting@consultbop.com">accounting@consultbop.com</a>. In the event you choose to not provide or later withdraw your consent, we may not be able to provide you our services or goods. Please note that these rights are subject to our compliance with applicable laws.
                        </p>
                    </li>

                    <li>
                        <strong><p class="text-justify">How long will we retain your information or data?</p></strong>
                        <p class="text-justify mb-5">
                            We may retain your information or data (i) for as long as we are providing goods and services to you; and (ii) as permitted under applicable law, we may also retain your data or information even after you terminate the business relationship with us. However, we will process such information or data in accordance with applicable laws and this Policy.
                        </p>
                    </li>

                    <li>
                        <strong><p class="text-justify">Data Security</p></strong>
                        <p class="text-justify mb-5">
                            We will use commercially reasonable and legally required precautions to preserve the integrity and security of your information and data.
                        </p>
                    </li>

                    <li>
                        <strong><p class="text-justify">Queries/ Grievance Officer</p></strong>
                        <p class="text-justify">
                            For any queries, questions or grievances about this Policy, please contact us using the contact information provided on this website.
                        </p>
                    </li>
                </ul>
            </div>

            <Footer />
        </>
    );
};

export default PrivacyPolicy;