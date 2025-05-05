import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content">
            <div className="footer p-10 max-w-7xl mx-auto">
                <div>
                    <span className="text-2xl font-bold">YourCompany</span>
                    <p>Creating reliable web solutions since 2024</p>
                </div>

                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Web Development</a>
                    <a className="link link-hover">UI/UX Design</a>
                    <a className="link link-hover">Mobile Apps</a>
                    <a className="link link-hover">Cloud Hosting</a>
                </div>

                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press</a>
                </div>

                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>

                <div>
                    <span className="footer-title">Follow Us</span>
                    <div className="grid grid-flow-col gap-4 mt-2">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.5a9.83 9.83 0 0 1-2.83.78 4.94 4.94 0 0 0 2.17-2.73 9.86 9.86 0 0 1-3.13 1.2A4.92 4.92 0 0 0 16.8 3c-2.73 0-4.94 2.2-4.94 4.92 0 .39.04.77.13 1.13-4.1-.2-7.73-2.17-10.17-5.16a4.91 4.91 0 0 0-.67 2.47c0 1.7.87 3.2 2.2 4.08a4.88 4.88 0 0 1-2.23-.61v.06c0 2.38 1.7 4.36 3.95 4.8a4.93 4.93 0 0 1-2.22.08 4.92 4.92 0 0 0 4.6 3.42A9.86 9.86 0 0 1 0 19.54a13.93 13.93 0 0 0 7.55 2.21c9.06 0 14.01-7.5 14.01-14v-.64A10.14 10.14 0 0 0 24 4.5z"/></svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184H4.385A1.385 1.385 0 0 0 3 4.57v14.859a1.386 1.386 0 0 0 1.385 1.387h15.23a1.387 1.387 0 0 0 1.385-1.387V4.57a1.386 1.386 0 0 0-1.385-1.386zM8.555 18.037H5.692V9.307h2.863v8.73zM7.123 8.105a1.662 1.662 0 1 1 0-3.323 1.662 1.662 0 0 1 0 3.323zm11.014 9.932h-2.863v-4.22c0-1.006-.02-2.3-1.4-2.3-1.4 0-1.615 1.095-1.615 2.225v4.295H9.396V9.307h2.748v1.188h.04c.383-.723 1.317-1.483 2.712-1.483 2.9 0 3.437 1.91 3.437 4.393v4.632z"/></svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.035-1.85-3.035-1.853 0-2.136 1.445-2.136 2.938v5.666H9.354V9h3.414v1.561h.049c.476-.9 1.635-1.85 3.367-1.85 3.599 0 4.263 2.367 4.263 5.449v6.292z"/></svg></a>
                    </div>
                </div>
            </div>

            <div className="text-center py-4 bg-base-300 text-sm">
                © 2025 YourCompany. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
