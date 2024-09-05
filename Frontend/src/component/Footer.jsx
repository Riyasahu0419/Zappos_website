// Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file
import { GoMail } from "react-icons/go";

const Footer = () => {
  return (
    <>

<div class="bg-blue-50 p-6 rounded-lg mt-20">
    <div class="flex items-center">
            <GoMail className='mr-2' size={30}/>
        <h2 class="text-xl font-semibold">Get on the List</h2>
    </div>
    <p class="mt-4 text-gray-600">Subscribe to Zappos emails for exclusive product launches, early notifications for sales, and a few extra-special surprises.</p>
    <form class="mt-6 flex space-x-3">
        <input type="email" placeholder="Enter Email Address" class="flex-1 p-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <button type="submit" class="p-3 bg-black text-white rounded-md font-semibold hover:bg-gray-800">Join the Party</button>
    </form>
</div>



    {/* Social Media Icons  */}
    <div class="social-media mt-14 ">
        <a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAgVBMVEUAAAAQcP8IZf8IZ/8JZv8HZf8IZv8IZv8IaP8JZ/8HZv8IZv8FZf8YcP9FjP+TvP/g7P/////R4/9Vlf8QYP+Es/9kn/8IZv8nef8JZf8AYP/v9f/Q4v/B2P9GjP8HZv+yz//Q4/83g/8HZv/g6/+Dsv8HZf/n7//////////e6//ZLyHjAAAAK3RSTlMAEGCfz+//XyCQj98w/////////xD//6D/kBD/////7////8///5Cgz+/vONkvXQAAAPJJREFUeAF9kkUCwzAMBGVSGMrM3P//rxBaB+e6s0YREFJpw2y0cgS1cT3DQLmNWPjcwK/XA24RWIuEdg4j7OtHUX0NYedxko5+jCeZMc0En8FsVDDHSd1WDoFdIlogX46awopozWA+ythsd7s9ZxymJBkcs3wcMZC0YHDKhDNbKLowuGYC21zINIWUbQ7EwwJT7YogqgTTKaTY4tIp7HDIRadwwzVlKVyv11HG9cekFBxam8FbTInuQ4LCd3cL2Uzd+4UV/VkHfUIgMLRdQuBi7JsCxh5rQEAfrO9NYSWojruwBOOhDoR8PF+j0fuipNX+AmbCIviMIiwCAAAAAElFTkSuQmCC" alt="Facebook"/></a>
        <a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABRFBMVEVHcEz4D5n9oAf9lAftEKn7lBXhA8VwFf3TPJF3Fv39tgX9egV9GvnpA7b9OFx2GPn7SUH9KXX9UjH////+AWH+Arv+wQPkANL+ygD9BKv+AZP+A27+Mkj/9fP+AYj+XS3+aRj+AXr+cJn+7/ubEvz+YQHUANn+J3Z6FPyIFPv+jQL+Tg/CAd6rAuX/vMT/17P0Asn/ruj+sQD+G3/+Pj3+SjX+dhz/vOD0bt3+ugD+Kmb+dwThGun+PST/y8r+xG3+GpL/rMr9D57+hAKUBuv+LlX+ghX+GGT+Bkb+IVb/s9b+X8P+nwHtAL3+pwH+lgOxEPvGGPXfYeb/xLbzFtHzAKr+N1r/6OH+Kzb7GLf+clD+fIL2uPH+WqP93/f+0O/+Vmb+im/oSOH+LLf+nTT+ylv+qV39Qcj+znvSgfr+mYnWgvrfdhN0AAAAE3RSTlMAx8/PX13K/gnMxsZdzdJhXcrGWouHNAAAAjlJREFUKJFN0utXokAYwOFptzL31u6+mMtVEImC1UxADRYjvGtq5a2Laff28v9/33ewzun3YTiHB2YGzhBCyGY8Fovt7OzWarVsNvsT295eXyW0jXgku6+yTUsmk+sbiPEdSpkaleXtqF7vMyGfIspkT8+wMu1ulM/ne73eeJXEKWX+qPAmtZxPJMbjFYKSOZkBzGf7L83mAPsJlh2H5AT7B+pdMo9Pv/SsQpkNOY6cYircJUfUWErdxfM9qBzHSeQXBvPkKHHBsvfd7j3LLmARziGUJIXiGcx6SGGJbqbEdhddrgTXkqKQ0ShfxjthGKigdjo44GJcB64VnicXF2wXOpKllKAkSRy+U8LVjiDN8wwJgiANR7yug6hYViBJKgSSgsgg6nozDbl2GwdG1y1LiWakyDCkXheuIHdOh7br6jqPyDMvKAjnVzD07RsQhcnEdZsi6Mwr2r5P0fErUBGEehsvTLMVIU9837yFoZlKpUQQczkc6u12K7dE0zQvYU+TZTlVoT+hMhEEAfGG4RVialoRpppXLBbly9vbS8exbaE1BZeihonwUK02Gg10nN5xznF3rSYvEc3zvEMQH4yBYVSrnifLuI4I6VbT4ojsVQ1jD2C6t2w4rEwBP7zetALysWoMjo9/i2+PifjXt+uutULW0PqFQmHr8fEw6umpqJmOLbg6Ht33aAcHW1EHhUJ/YDRwW44w+UYP9bsCpR80yv1BAzft2F82ojO/9mFJS+0f01e/f0X4DzXfhmzQgNUBAAAAAElFTkSuQmCC" alt="Instagram"/></a>
        <a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAA/0lEQVR4AbXPIazCMACE4d+L2qoZFEGSIGcRc/gJJB5XMzGJmK9EN0HMi+qaibkKVF1txdQe4g0YzPK5yyWXHL9TaPNQ89LojH87N1rbJcXkMF4Fk31UMrf34hm14KUeoQxGArALHTMuQD2cAWQfJXOpgTbksGr9ng8qluShJTPhyCdx63POg7rEim95ZyR68I1ggQpnCEGwyPicw6hZtPEGmnhkycqOio1zm6XuFtyw5XDXfGvuau0dXHzJp8pfBPuhIXO9ZK5ILUCdSvLYMpc6ASBtl3EaC97I4KaFaOCaBE9Zn5jUsVqR2vcTJZO1DdbGoZryVp94Ka/mQfE7f2T3df0WBhLDAAAAAElFTkSuQmCC" alt="Twitter"/></a>
        <a href="#"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3LTc3Nzc3NTc3Nzc3Nys3Ny03LTc3Kzc1Lis1LTAtNTcrLS03NTcuNTUrNf/AABEIABwAHAMBEQACEQEDEQH/xAAYAAACAwAAAAAAAAAAAAAAAAAFBgABBP/EACoQAAIBAwIEBAcAAAAAAAAAAAECAwAEBRESBiExkRNRYXEHFDNBQoGS/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAMCBAUHAf/EACIRAAICAgICAgMAAAAAAAAAAAECAAMEESExEkEFgSIjUf/aAAwDAQACEQMRAD8AFQxSTzJDCheSRgqKvUk9BWQBs8ToDuEUs3AjFLg8Li3FvnMy63mg3wWkW/wvQnzp5qROGMzRl5Nw8qK/x/pPczZrALZ2MWTxt2t9jpW2+Kq7WjbyYfaovVoeQOxG42abLDVavi4gOky/rcN8F3Fva8T2Mt2yrEHI3N0BIIB7kU6kgONyj8kjvisEjFIqWXBGdkuYkkuZb54jLybeS4AIPpqf3Tuq2J7mYpNmbUqnQA6+pkxym0+G2SkueS3k4EAP5HVRqP5PaorxSdx137PkkC+hzE2q025KIRzus2+C4fwlhZCCUyQGe5iljDqwc6gEe+varJs8EUCYaYgyci132NHQ+ovZrOX2ZaP5x0EUX04Yl2onsKS9jP3NLGw6sffh2ffuDaXLclewlsSx1YkkcuZ15DkKCZAADqVRJSUQn//Z" alt="Pinterest"/></a>
        <a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACWklEQVR4AezRA4ydQRiF4bec2ubUdpzUboMyRm3bCGrbCGrbtt1F6t7a9tdvk7Uv1jvJE/7nzMn8iEicSh4Q9wN+/PiB4pt6q176e+/vo5IgKVSqSKRUKH4H63gXrPe1+qJ++MNaS0FVVHWyttoya7vvsXaql7Wr7lm7/bG1h/9Ze1qsvayuq7vqTjjuqlvqijr/zdoTmj+gtty0dsVua6dod6++1taqaG2K/NZiFQA5IOM2WPUP/gpITLsCR8tCEQBSQ4qDsEpAYpMXnMgMaWkENQT+KIltLaEe46GvgMSFmTCStbAwrgbshNWcgR1OBXPnFhk+XCR7drcHnIGD+MJppwf8/i3i6yvSqpVbAx7BFbzgplPBXLlEXr+WwLNhg0jJki4NeAbeeIG3WwP8zvv3IoMGiaRN69QABzzBG7zcHhBwrl4Vad482l3P4Rn33XuBsC/RpUu0u17CM7w8NWDpUpGCBZ39BQ684LZbAy5dEmnQQASc5oB7+MA5pwf8+iXy6ZPI0KEixoiAS57BDS7BHqeCefOKrFghUr68CLjlEpxgAyxzKpgypQh4xGHYwGQYIiBxYSFMpBXUiqsBXaAVGSHNddgf25c/h9uFIDMAFaDgLTgRW5c74FY9qACAMQZUHmNS9zem7WZj5p0zZrfDmHPPjLn7xpiHYswz9Vq9V5+i8M7/22d+Wb8O7TqvnXt3GrNkjDHtSxiTGWMwigcPHqDwVdfUDeWlHOrZgwep3jx4kF4ePMiqcqq8qkAU8vh/m0Wz6fw6HP6dN/3v8FYP/P3faM9o1AEAa00uUOyK7dUAAAAASUVORK5CYII="  alt="YouTube"/></a>
    </div>

     {/* Footer Section  */}
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-column">
                <h3>About Zappos</h3>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Zappos ONE</a></li>
                    <li><a href="#">Zappos for Good</a></li>
                    <li><a href="#">Zappos at Work</a></li>
                    <li><a href="#">Get the Zappos Mobile App</a></li>
                    <li><a href="#">Amazon Prime Benefits</a></li>
                    <li><a href="#">Zappos VIP Benefits</a></li>
                    <li><a href="#">Coupons</a></li>
                    <li><a href="#">Accessibility Statement</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Customer Service</h3>
                <ul>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Contact Info</a></li>
                    <li><a href="#">¿Ayuda en español?</a></li>
                    <li><a href="#">Shipping And Returns Policy</a></li>
                    <li><a href="#">About Proposition 65</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Resources</h3>
                <ul>
                    <li><a href="#">Measurement Guide</a></li>
                    <li><a href="#">Size Conversion Chart</a></li>
                    <li><a href="#">Measure Your Bra Size</a></li>
                    <li><a href="#">Associates Program</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Press Kit & Brand Inquiries</a></li>
                    <li><a href="#">Site Map</a></li>
                    <li><a href="#">Take Survey</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Explore Zappos</h3>
                <ul>
                    <li><a href="#">Brands</a></li>
                    <li><a href="#">Clothing</a></li>
                    <li><a href="#">The Style Room</a></li>
                    <li><a href="#">Eyewear</a></li>
                    <li><a href="#">New Arrivals</a></li>
                    <li><a href="#">Running</a></li>
                    <li><a href="#">Jackets</a></li>
                    <li><a href="#">Shoes</a></li>
                    <li><a href="#">Watches</a></li>
                    <li><a href="#">Zappos Adaptive</a></li>
                    <li><a href="#">All Departments</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© 2009–2024 - Zappos.com LLC or its affiliates</p>
            <ul class="footer-bottom-links">
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Fur Policy</a></li>
                <li><a href="#">Interest-Based Ads</a></li>
                <li><a href="#">24/7 Customer Service (800) 927-7671</a></li>
            </ul>
        </div>
    </footer>
    
    </>
  );
};

export default Footer;
