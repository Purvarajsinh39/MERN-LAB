import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {

  return(
    <>
    <footer class="bg-gray-50 border-t border-gray-200 py-8">
  <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
    <p class="text-sm text-gray-500">© 2026 Company Name. All rights reserved.</p>
    <ul class="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
      <li><Link to="/About" class="hover:text-gray-900">About</Link></li>
      <li><a href="#" class="hover:text-gray-900">Privacy Policy</a></li>
      <li><a href="#" class="hover:text-gray-900">Licensing</a></li>
      <li><Link to="/Contact" class="hover:text-gray-900">Contact</Link></li>
    </ul>
  </div>
</footer>
</>
  );
}


export default Footer;