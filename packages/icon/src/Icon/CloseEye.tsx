import React from "react";
import { IconProps } from "../type";


export const CloseEye = ({ color = "#000", ...props }:IconProps) => (
  <svg 
  width="24" 
  height="24" 
  viewBox="0 0 24 24" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg" 
  {...props}>

  <path 
  fillRule="evenodd" 
  clipRule="evenodd" 
  d="M15.9202 12.7988C15.9725 12.5407 16 12.2736 16 12C16 9.79086 14.2091 8 12 8C11.7264 8 11.4593 8.02746 11.2012 8.07977L15.9202 12.7988ZM8.66676 9.78799C8.24547 10.4216 8 11.1821 8 12C8 14.2091 9.79086 16 12 16C12.8179 16 13.5784 15.7545 14.212 15.3332L12.7381 13.8594C12.5098 13.9501 12.2607 14 12 14C10.8954 14 10 13.1046 10 12C10 11.7393 10.0499 11.4902 10.1406 11.2619L8.66676 9.78799Z" 
  fill={color!}/>

  <path 
  fillRule="evenodd" 
  clipRule="evenodd" 
  d="M16.5191 17.6405L15.0498 16.1712C14.0776 16.6805 13.0477 17 12 17C10.4742 17 8.98615 16.3224 7.65913 15.3677C6.34001 14.4186 5.26407 13.2558 4.58385 12.43C4.48408 12.3088 4.40956 12.2182 4.34784 12.1385C4.29897 12.0754 4.26785 12.0315 4.24754 12C4.26785 11.9685 4.29897 11.9246 4.34784 11.8615C4.40956 11.7818 4.48408 11.6912 4.58385 11.57C5.24926 10.7622 6.29333 9.63187 7.5733 8.69463L6.14457 7.2659C4.79641 8.29616 3.72245 9.47005 3.04008 10.2985C3.01649 10.3272 2.99191 10.3566 2.96661 10.3869L2.96659 10.3869C2.65317 10.7624 2.22972 11.2696 2.22972 12C2.22972 12.7304 2.65316 13.2376 2.96659 13.6131L2.96681 13.6133C2.99204 13.6435 3.01655 13.6729 3.04008 13.7015C3.77994 14.5998 4.98016 15.9041 6.4911 16.9912C7.99414 18.0725 9.89006 19 12 19C13.67 19 15.206 18.419 16.5191 17.6405ZM8.80681 5.6855C9.7906 5.26871 10.8643 5 12 5C14.1099 5 16.0058 5.92747 17.5089 7.00885C19.0198 8.0959 20.22 9.40025 20.9599 10.2985C20.9835 10.3272 21.0081 10.3566 21.0334 10.3869L21.0334 10.3869C21.3468 10.7624 21.7703 11.2696 21.7703 12C21.7703 12.7304 21.3468 13.2376 21.0334 13.6131C21.0081 13.6434 20.9835 13.6728 20.9599 13.7015C20.4733 14.2923 19.7874 15.0589 18.945 15.8237L17.529 14.4077C18.3089 13.708 18.9539 12.9912 19.4161 12.43C19.5159 12.3088 19.5904 12.2182 19.6522 12.1385C19.701 12.0754 19.7321 12.0315 19.7524 12C19.7321 11.9685 19.701 11.9246 19.6522 11.8615C19.5904 11.7818 19.5159 11.6912 19.4161 11.57C18.7359 10.7442 17.66 9.58138 16.3409 8.63233C15.0138 7.6776 13.5258 7 12 7C11.449 7 10.9029 7.08837 10.3675 7.24624L8.80681 5.6855Z" 
  fill={color!}/>

    <path 
    d="M5 2L21 18" 
    stroke={color!} 
    strokeWidth="2"/>

</svg>

  );