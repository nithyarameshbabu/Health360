
//Random generator
function generateRandomText(containerIndex) {
    const texts = [
    ["5000 steps", "7500 steps", "10000 steps", "12000 steps", "8500 steps", "6000 steps", "9200 steps", "11000 steps", "7800 steps", "8500 steps"],
    ["65 bpm", "72 bpm", "80 bpm", "88 bpm", "95 bpm", "100 bpm", "110 bpm", "120 bpm", "130 bpm", "140 bpm"],
    ["200 kcal", "250 kcal", "300 kcal", "350 kcal", "400 kcal", "450 kcal", "500 kcal", "550 kcal", "600 kcal", "650 kcal"],
    ["120/80 mmHg", "125/85 mmHg", "130/90 mmHg", "135/95 mmHg", "140/95 mmHg", "145/100 mmHg", "150/105 mmHg", "155/110 mmHg", "160/115 mmHg", "165/120 mmHg"],
    ["98%", "97%", "96%", "95%", "94%", "93%", "92%", "91%", "90%", "89%"],
    ["98.6°F", "99.2°F", "98.3°F", "99.8°F", "98.9°F", "98.1°F", "99.5°F", "98.4°F", "99.1°F", "98.7°F"]
    ];
    return texts[containerIndex % texts.length];
  }
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const learnMoreLinks = document.querySelectorAll(".health__card a");
  
    learnMoreLinks.forEach(function (link, index) {
      setInterval(function () {
        const randomTexts = generateRandomText(index);
        const randomIndex = Math.floor(Math.random() * randomTexts.length);
        link.textContent = randomTexts[randomIndex];
      }, 2000); 
    });
  });

//Location Finder
  const locationContainer = document.getElementById('locationContainer');
  const currentLocationSpan = document.getElementById('currentLocation');


  function getCurrentLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
          currentLocationSpan.textContent = "Geolocation is not supported by this browser.";
      }
  }


  function showPosition(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      currentLocationSpan.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
  }

  
  function showError(error) {
      switch(error.code) {
          case error.PERMISSION_DENIED:
              currentLocationSpan.textContent = "User denied the request for Geolocation.";
              break;
          case error.POSITION_UNAVAILABLE:
              currentLocationSpan.textContent = "Location information is unavailable.";
              break;
          case error.TIMEOUT:
              currentLocationSpan.textContent = "The request to get user location timed out.";
              break;
          case error.UNKNOWN_ERROR:
              currentLocationSpan.textContent = "An unknown error occurred.";
              break;
      }
  }


  getCurrentLocation();

  
 
//Back Button
function returnToIndex() {
    window.location.href = 'index.html';
}

//Insurance page
document.getElementById("claimButton").addEventListener("click", function() {
    // Redirect to Insurance.html page
    window.location.href = "Insurance.html";
});