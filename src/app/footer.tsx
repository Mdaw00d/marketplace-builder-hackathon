
export default Footer;
function Footer(){
    return(
<footer className="bg-blue-500 text-white py-8 mt-28 ">
  <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-start">
    {/* Left Section */}
    <div className="mb-6 md:mb-0 text-center">
      <h2 className="text-4xl font-semibold mb-4">AuraLine</h2>
      <h3 className="font-medium ">Contact Us </h3>
      <br />
      <h4 className="font-bold">Whatsapp</h4>
      <div className="space-y-2">
        <div className="flex items-center space-x-2 ">
       
        <img className="ml-40" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAyxJREFUSEvFlU1oFGcYx//PjOvObLrzPqMXtVlKSxsqFvxC20uLCI0thV76AQ0UGqSCtVFEyEEvFvQgeqnWIgihQj0I6SFQpN+llkJbGvQSLUIUPw6SZjPvZLMzk2R3nuZtNhKTna2XkDnO/N/nN8/H/3kJS/zQEsfH8gOqWm+1gXcFeAVAB4A6Ab+lwB8i8m2b719tVYXMDKJyuUS2fR7ALgAVACbQDSFKSGSzABsJUAScyit1hIimmoGaApLx8Q4R+RkieRAddDzvSyKShQGSMOwRkVMAbln1+tv51auHFmoWASYmJtbYtdpfjVLsdJiHW5VgcmzshdSyBgBYThRtoHXrovn6RYBY68sAtgPY5jLfjkZHn7RXrizmPe/vLFADMgigz2XemwmIx8ZehmVdgchu1/f7JiuV9Wm9brL5x1Hq6WZlmgsWa30YwHECOh3m7+feP5JBFARniKjbUconoulI614CThgxAbsc5u+yspB799ykWKwQMOAwv9UcoPU1EN0tKPWmESRh+JGInP1PLNLt+v4XrfoRmfMACsybmgJire/P1P+yy7zHCKrV6lprevo2gMBRqkREtVaAWOtzALpcZi8LcBPAoMv83pygMYqnBfjcVerjVn1ItD4hwAGX2ckCfAPAd5lfnP+nsdaXYNxMNIBarcfK5QqSpqZcfZNAPzMHRt/QbXGZn8sCHAPQW7Pt9mKxODInEhE71vpTItoHYHy25yg2mn/SYe4VEWsyDEcF+Mpl/rApINH6GQGGIfKJ6/tHFzlX61cFOA3g+ca3lIDXzFjGYdgFkYsLp22R0cwkWEDdYd6a1dCq1lssEQ9Ed4wZ4yB4CkR/ml3lMu/INJo8eNCWOE5ARGccpQ61mpiHBpsN/gMAT9J0W2HVqruZgCQM3xCRr0H0PoAUQCeJ/J6vVC5QqRTPPxiVy+20YsUHENlvXGLV6zv/d9lFQfBZo5GzsYiGIPIsgCkR+QWA8YQQkdlVLzU0v5JId9ZSfKQHsdZmhwzPXC4/1SzrR8/zyjIy8kSSy70DotcBmPH1Z0b2OgFXUqL+glKm9pnP8l+Zj9PoZc3gXyN3TijYsfVVAAAAAElFTkSuQmCC"/>
          <span>+1 202-918-2132</span>
        </div>
        <h4 className="font-bold">Call Us</h4>
        <div className="flex items-center space-x-2">
        <img className="ml-40" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA4dJREFUSEu1lclvHEUUxr/XXaPpxZ6uiW2WECQEkZKIC4rDdogTFuGLI7FcQORA4BRQhJAi8gfABSJxAFkcQHAJ2yEoiuAECAgBgoD4ABIRmECAOFa8dLXtTA+4qx5U0+PMtBfZltK3rqp+v3rve99rwhV+6ArHx7oAqVIJgC9BdIqJPgpqta+Xu+giwNzc3DVuln0AINNC3N/V1TVe/jhVitvXCHhfz88fCPv6xspnOwCzs7N9QusvAGwpDv6shdhVhvDFi13NSmU7A/1EdAjA1QBSBvYFUr5Xgv//WgT/HMA2AOcA2FveAGBJSCtIHMfSA14B0V4Af9vvfSl/a+0vZNBIkuPEvCcPzrybtZ4nISzwJgC/aCEGWpkUGvwB5mOelM8R0T9pHB8B0aMATnhRtJuI8jIuAFKlUgAeAZs9KX+1m4UenwLYSsCIJ+V2u96uAQGnq1F0e5Ik3VXgJ1suQ3RbGEXflgF/AtjEWbYp6O09XwYA+M6X8la7PjMz01thHoQxh0F0LQOHAilfbCr1AgPPEtHTXhS9XAbYVruDie4MouiU3WwqNcLALQz8oF33nu7u7ol2ARtJ8jAxv2PL4ku5qxHHDxLR0f8yfteX8pEOQEOpYQKebKenSXIezBvBfJdfr39WbsE8E2MsdNKXsq8xOXkdCfGX1dGX0jbIZQ2a09N72HGOA/jEl/LePIMkeYmZnwHwpi/l4+tx/YLIPD4eNj3POpSIaIsXRaOXlNrhAFYsNsz9Yb0+slZIh9FSpV4H8ER7DVOl3gZg63nOAA+FUn5fCN1TMeZDAEILMbSU4ztKZF8uTUxsdCqVswCqhvmBsF4/lmfm+9+A+WYAmplfdV13mI15i4G8bQGMmkplIAzDCyuOiqJzDjNw0PIcx9lRrdXO8NhY0AzDYTA/VgpgHWurYAXtMOMiJ7cW8mBBcAJAvy2LY8xQdcOGH3ODxfEAHGcfmIcATHOW3Z2X4bLjF2Wy5Lgu2s8Ova22mcD8lF+vv7GcwCXHn/aktJfLn2X/Bzw1VUuFOFLMJ9tbJx2t97eyaYe1D0o7OlYFaAVoKHWQgOet8Pka81cMHIXjnESWjZlqNXO1/rhoglEtxM72jlrVH60xNXU9ue5rAAZX8MHvrPXOoKfHOnnhWRWgdbqZJJstxAD3EfONAK4C0AvmM2zMYDn4ihqs1bHLnV9TBuuB/guhu44oI/+6OgAAAABJRU5ErkJggg=="/>
          <span>+1 202-918-2132</span>
        </div>
      </div>
      <div className="mt-4 ">
        <p className="font-bold" >Download App</p>
        <div className="flex space-x-4 mt-2 justify-center">
          {/* App Store Button */}
          <a>
          {/* Google Play Button */}
          <div className="bg-black h-14  w-48 rounded-lg ">
            
            <h4 className="ml-14 text-xs font-semibold ">DOWNLOAD ON THE <br /> <span className="text-xl -ml-1">App Store</span> </h4>
            <img className="h-12 w-12 -mt-10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAdtJREFUSEvN1T1oFFEQwPH/7CWX3TWycxyi2Ah2ViImFpaiotiISuz9aLQRRG21FcFKq1QWFkZBa7WKUUQrsYyCIihByNvkzJ642dHrzrvzdp8kkIVtdt7O782b93aFdb5knfPzX4CZ1dtLS1fF7GSoumfYJL0BMwvbafoC2GvwLlbdvaZA27lbBpc7SQ2mYtWZNQUy5z4C2xE5EyXJ/bIeDl2in8vLu6woDpnZuK2u3oubzS+Zc+fzWu3xSJ4fBXYSBPMUxWzUaHwahA0EnHONEKb/rPGJrpcMkTnMvgJHgM1/JRS5HiXJjV6kDzCz0XaavgQmysrvjRcwuUn1bffzPiBz7iww7Zvc4HSs+qC0gmxxcQ6R/T6AwKNQ9VSlHmTOfQeaXoDIxTBJ7lYFfgEjPoDBtVj1ZlXgG7DVBwBmItWpqsBT4KAnYAKHQ9VnpU1ece6KwMByS9AMkXO9p7tvm7ZarW21PP8MjHpW0Rn+JlLdN/QcdIIrzt0RuOALBGbHxxqNJ6WALSyMt+v198AOD+RVpNp3fv75sfuRppOB2SwwVoYYuAAmQtUPpU3uHpA5d8DgtkAi8BCR51YUmYlsEZFjmHXu1xIEl8Ikma+0Tctm6xv3/mVuOOA3Q4OiGYBtSZ8AAAAASUVORK5CYII="/>
            <img  src ="google-play.png " 
              alt=""
              
            />
             </div>
          </a>
          <a>
          {/* Google Play Button */}
          <div className="bg-black h-14  w-48 rounded-lg">
            <h4 className="ml-16 text-xs font-semibold">GET IT ON <br /> <span className="text-lg -ml-1">Google Play</span> </h4>
            <img className="h-12 w-12 -mt-10 ml-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAa9JREFUSEu9lb9LHFEUhb9TWYgEISn9S1YSLKIRxEpIbxNSBQJRm3RGQVERNWmChrB/QoogCgZ/VWmCpoiNFioIVoKioOMceCPDZmZ3dle9zYM3vPO9e++5b8QDhx5Yn8cHRFHUAewAP4EhSQfNZPlfBlEUzQFLwArQCkwA45LOGwFlASJgEZgG1oF24AgYAcqS/L1w5AEs8AVYSEG89xt4I8lroagGSEPWgKdB0RmUgWFJx7UotQA+/zkWnwd+xRk9SwleBIh7lhtFAEkms8BGKpMToA/4BGwGI1xVkooCfM79SDK5BF4BU2H193/AoCTD7qIeQFIul8SW9dpfcWP3pyRpO9mvF+CylOJytAAWacsAdEraagRg8Z4wH6fxEE4Cy8CTIPYHeJsW937RDGxHi7vmL4Pg91h8JljW+9+yhrAIwFPcHW7cmyrJtV0kyW9WwzY9BF4E99g1SfwA3kvaa2bQLP48lCFxyy7wTtJqLeFaTfYT3RVe0gHADf4IfJV0U1Q8r8l/w/CMAq+Da8YkndUjXC0D/wP8LNh+HyTtNyKcC2hGLOvs4/+T7zuDW33qlRmac7/LAAAAAElFTkSuQmCC"/>
            <img  src ="google-play.png " 
              alt=""
              
            />
             </div>
          </a>
         
        </div>
      </div>
    </div>

    {/* Middle Section: Most Popular Categories */}
    <div className="mb-6 md:mb-0 text-center">
      <h3 className=" text-lg font-semibold border-b-2 border-white inline-block pb-1 mb-4">
        Most Popular Categories
      </h3>
      <ul className="space-y-2 text-center">
        <li>Clothing</li>
        <li>Makeup</li>
        <li>Personal Care</li>
        <li>Jewellery</li>
        <li>Perfumes</li>
        <li>Shirts</li>
        <li>Pants</li>
      </ul>
    </div>

    {/* Right Section: Customer Services */}
    <div className="text-center">
      <h3 className="text-lg font-semibold border-b-2 border-white inline-block pb-1 mb-4 ">
        Customer Services
      </h3>
      <ul className="space-y-2">
        <li>About Us</li>
        <li>Terms & Conditions</li>
        <li>FAQ</li>
        <li>Privacy Policy</li>
        <li>E-waste Policy</li>
        <li>Cancellation & Return Policy</li>
      </ul>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="mt-8 text-center">
    <p>© 2022 All rights reserved. Reliance Retail Ltd.</p>
  </div>
</footer>

    );
}