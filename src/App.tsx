import ProductDesktop from './images/image-product-desktop.jpg'
import ProductMobile from './images/image-product-mobile.jpg'

const App = () => {
  return (
    <div className="h-screen w-screen bg-creamy relative flex justify-center items-center">

      <div className="absolute inset-0 m-5 md:static md:m-0 md:w-1/2 rounded-md grid grid-rows-5 grid-flow-col md:grid-cols-2 md:grid-rows-none md:grid-flow-row"> 
        
        <div className="w-full h-full bg-black row-span-2 md:row-span-3 rounded-t-md md:rounded-t-none md:rounded-l-md">
          <img src={ProductDesktop} alt="" className='hidden md:block w-full h-full object-cover rounded-l-md' />
          <img src={ProductMobile} alt="" className='block md:hidden w-full h-full object-cover rounded-t-md' />
        </div>

        <div className="w-full h-full bg-white row-span-3 rounded-b-md md:rounded-b-none md:rounded-r-md relative">

          <div className="absolute inset-8 flex flex-col justify-between items-start space-y-3">

            <div className='font-montserrat font-normal text-md text-grayish'>
              P E R F U M E
            </div>

            <div className='font-fraunces font-bold text-3xl lg:text-4xl text-darkBlue'>
              Gabrielle Essence Eau Da Parfum
            </div>

            <div className="font-montserrat font-normal text-md text-grayish text-ellipsis overflow-hidden">
              A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
            </div>

            <div className='font-fraunces font-bold inline-flex items-center space-x-5'>
              <div className='text-darkCyan text-3xl lg:text-4xl'>
                $149.99
              </div>

              <div className=' text-grayish text-md line-through'>
                $169.99
              </div>

            </div>

            <button className='font-montserrat font-bold text-white w-full h-16 bg-darkCyan rounded-xl space-x-3 inline-flex justify-center items-center'>
              <div>
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.383 10.388C14.3814 9.90825 14.2359 9.44002 13.9652 9.04388C13.6946 8.64775 13.3113 8.34193 12.865 8.16601L14.359 2.573C14.3901 2.45389 14.3933 2.32921 14.3683 2.20866C14.3433 2.08812 14.2909 1.97496 14.215 1.878C14.1374 1.78718 14.0404 1.71489 13.9313 1.66644C13.8221 1.61799 13.7034 1.5946 13.584 1.598H2.637L2.373 0.591005C2.32696 0.420885 2.22603 0.270731 2.08589 0.163862C1.94575 0.0569932 1.77424 -0.000607979 1.598 4.83967e-06H0V1.598H0.983L2.965 8.998C3.01222 9.17199 3.11682 9.32493 3.26185 9.43202C3.40688 9.53911 3.58382 9.59407 3.764 9.58801H11.986C12.1931 9.59533 12.3894 9.68277 12.5333 9.83191C12.6773 9.98104 12.7577 10.1802 12.7577 10.3875C12.7577 10.5948 12.6773 10.794 12.5333 10.9431C12.3894 11.0922 12.1931 11.1797 11.986 11.187H1.598C1.48971 11.1816 1.38145 11.1982 1.27979 11.2359C1.17814 11.2736 1.08521 11.3316 1.00665 11.4064C0.928086 11.4811 0.865535 11.571 0.822794 11.6706C0.780053 11.7703 0.758012 11.8776 0.758012 11.986C0.758012 12.0944 0.780053 12.2017 0.822794 12.3014C0.865535 12.401 0.928086 12.4909 1.00665 12.5657C1.08521 12.6404 1.17814 12.6984 1.27979 12.7361C1.38145 12.7738 1.48971 12.7904 1.598 12.785H2.541C2.40976 13.147 2.36768 13.5354 2.41831 13.9171C2.46894 14.2988 2.6108 14.6628 2.83188 14.978C3.05296 15.2933 3.34675 15.5507 3.68837 15.7284C4.03 15.9061 4.40942 15.9989 4.7945 15.9989C5.17958 15.9989 5.559 15.9061 5.90062 15.7284C6.24225 15.5507 6.53604 15.2933 6.75712 14.978C6.9782 14.6628 7.12006 14.2988 7.17069 13.9171C7.22132 13.5354 7.17924 13.147 7.048 12.785H8.933C8.79544 13.1636 8.7555 13.5707 8.81687 13.9688C8.87824 14.3669 9.03894 14.7431 9.28413 15.0627C9.52932 15.3823 9.85108 15.6349 10.2197 15.7973C10.5883 15.9596 10.9919 16.0265 11.3932 15.9916C11.7945 15.9568 12.1805 15.8214 12.5157 15.5979C12.8508 15.3745 13.1242 15.0702 13.3106 14.7131C13.4971 14.3561 13.5905 13.9578 13.5824 13.5551C13.5742 13.1524 13.4647 12.7582 13.264 12.409C13.6059 12.1938 13.8878 11.8957 14.0836 11.5424C14.2794 11.189 14.3827 10.792 14.384 10.388H14.383ZM11.26 7.99H4.395L3.068 3.196H12.545L11.26 7.991V7.99ZM4.795 14.382C4.68671 14.3874 4.57845 14.3708 4.47679 14.3331C4.37514 14.2954 4.28221 14.2374 4.20365 14.1627C4.12509 14.0879 4.06254 13.998 4.01979 13.8984C3.97705 13.7987 3.95501 13.6914 3.95501 13.583C3.95501 13.4746 3.97705 13.3673 4.01979 13.2676C4.06254 13.168 4.12509 13.0781 4.20365 13.0034C4.28221 12.9286 4.37514 12.8706 4.47679 12.8329C4.57845 12.7952 4.68671 12.7786 4.795 12.784C4.99999 12.7943 5.1932 12.8829 5.33466 13.0316C5.47612 13.1804 5.55501 13.3778 5.55501 13.583C5.55501 13.7883 5.47612 13.9857 5.33466 14.1344C5.1932 14.2831 4.99999 14.3717 4.795 14.382V14.382ZM11.188 14.382C11.0797 14.3874 10.9715 14.3708 10.8698 14.3331C10.7681 14.2954 10.6752 14.2374 10.5966 14.1627C10.5181 14.0879 10.4555 13.998 10.4128 13.8984C10.3701 13.7987 10.348 13.6914 10.348 13.583C10.348 13.4746 10.3701 13.3673 10.4128 13.2676C10.4555 13.168 10.5181 13.0781 10.5966 13.0034C10.6752 12.9286 10.7681 12.8706 10.8698 12.8329C10.9715 12.7952 11.0797 12.7786 11.188 12.784C11.393 12.7943 11.5862 12.8829 11.7277 13.0316C11.8691 13.1804 11.948 13.3778 11.948 13.583C11.948 13.7883 11.8691 13.9857 11.7277 14.1344C11.5862 14.2831 11.393 14.3717 11.188 14.382V14.382Z" fill="white"/>
                </svg>
              </div>

              <div>
                Add to cart
              </div>

            </button>

          </div>


        </div>
      </div>


    </div>
  );
}

export default App;
