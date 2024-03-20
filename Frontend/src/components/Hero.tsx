

const Hero = () => {
  return (
    <div className="flex">


      <div className="section-banner">

       
    <>
        {[...Array(7)].map((_, index) => (
          <div key={`star-${index + 1}`} id={`star-${index + 1}`}>
            <div className="curved-corner-star">
              <div id="curved-corner-bottomright"></div>
              <div id="curved-corner-bottomleft"></div>
            </div>
            <div className="curved-corner-star">
              <div id="curved-corner-topright"></div>
              <div id="curved-corner-topleft"></div>
            </div>

        
          </div>

        



        ))}


      
    </>
      </div>

   
   

    </div>

    
  );
};

export default Hero;
