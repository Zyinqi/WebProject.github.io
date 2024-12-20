// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Array of dog objects with consistent 'characteristic' field
    const dogs = [
      {
        name: "Rottweilers",
        characteristic: "Strong, loyal, and fearless – the brave guardian",
        habit: "Enjoys guarding the house and snuggling on the couch – double threat!",
        birthplace: "Rottweil, Germany",
        activities: "Perfect for those who love jogging with a built-in bodyguard.",
        image: "images/Rottweilers.png"
      },
      {
        name: "Shiba Inu",
        characteristic: "Spirited, alert, and independent – the sassy ninja",
        habit: "Enjoys playing toys and wandering in the nature forest.",
        birthplace: "Japan",
        activities: "Ideal for those who appreciate independence with a sprinkle of companionship.",
        image: "images/Shiba_Inu.png"
      },
      {
        name: "Golden Retriver",
        characteristic: "Friendly, intelligent, and devoted – the ultimate smile-inducers.",
        habit: "Chasing tails and dreams of infinite tennis balls.",
        birthplace: "Scotland",
        activities: "Great for fetch enthusiasts and those who believe every day is a spa day.",
        image: "images/Golden_Retriever.png"
      },
      {
        name: "Boarder Collie",
        characteristic: "Intelligent, energetic, and acrobatic – the genius.",
        habit: "Constantly plotting world domination through naptime and brain teasers; Actively interact with people.",
        birthplace: "Scotland/England border ",
        activities: "Perfect for agility courses, brain games, and high-speed chases (of squirrels).",
        image: "images/Border_Collie.png"
      },
      {
        name: "Welsh Corgi",
        characteristic: "Affectionate, smart, and obedient – the royal jesters of the dog park.",
        habit: "Expert herders and professional couch warmers with a flair for mischief.",
        birthplace: "Wale",
        activities: "Ideal for herding activities, playful antics, and making everyone smile.",
        image: "images/Welsh_Corgi.png"
      },
      {
        name: "Huskimos",
        characteristic: "Mysterious, adventurous, and fluffy – you-cannot-know-what-it-will-do dog",
        habit: "Adventure seekers who think every day is a snow day, even in summer.",
        birthplace: "Siberia, Russia",
        activities: "Perfect for extreme adventures and in snowy places.",
        image: "images/Huskimos.png"
      },
      {
        name: "Songmao dog",
        characteristic: "Compliant, sensible, and  skillful – the secretary .",
        habit: "It seems like can understand what its master say, and you never know what it's thinking when it sits around you. It not even odd if it can speak .",
        birthplace: "China",
        activities: "Great for old people who needs companion and a helper that can help them meet their meets.",
        image: "images/Songmao_dog.png"
      },
      {
        name: "Poodle",
        characteristic: "Intelligent, active, and elegant – the class act of the canine world.",
        habit: "Loves the spotlight and can outsmart your smartphone.",
        birthplace: "Germany/France",
        activities: "Perfect for stylish walks, doggy day spas, and social soirées.",
        image: "images/Poodle.png"
      },
      {
        name: "Samoyed",
        characteristic: "Friendly, gentle, and active – the smiling fluffballs who think every day is a snow day.",
        habit: "Always up for a snowball fight and giving the best grins.",
        birthplace: "Siberia, Russia.",
        activities: "Perfect for people who love cute animals -- Samoyed will never fail you!",
        image: "images/Samoyed.png"
      }
    ];
  
    const dogContainer = document.getElementById('dog-container');
    const overlay = document.getElementById('overlay');
    const closeButton = document.querySelector('.close-button');
  
    // Elements inside the overlay
    const overlayName = document.getElementById('dog-name');
    const overlayImage = document.getElementById('dog-image');
    const overlayCharacteristic = document.getElementById('dog-characteristic'); // New element
    const overlayHabit = document.getElementById('dog-habit');
    const overlayBirthplace = document.getElementById('dog-birthplace');
    const overlayActivities = document.getElementById('dog-activities');
  
    // Function to create dog cards
    const createDogCards = () => {
      dogs.forEach((dog, index) => {
        // Create card div
        const card = document.createElement('div');
        card.classList.add('dog-card');
        card.setAttribute('data-index', index); // To identify which dog was clicked
  
        // Create image element
        const img = document.createElement('img');
        img.src = dog.image;
        img.alt = dog.name;
  
        // Create name div
        const nameDiv = document.createElement('div');
        nameDiv.classList.add('dog-name');
        nameDiv.textContent = dog.name;
  
        // Append image and name to card
        card.appendChild(img);
        card.appendChild(nameDiv);
  
        // Add event listener to card
        card.addEventListener('click', () => {
          showOverlay(dog);
        });
  
        // Append card to container
        dogContainer.appendChild(card);
      });
    };
  
    // Function to show overlay with dog details
    const showOverlay = (dog) => {
      overlayName.textContent = dog.name;
      overlayImage.src = dog.image;
      overlayImage.alt = dog.name;
      overlayCharacteristic.textContent = dog.characteristic; // Set characteristic
      overlayHabit.textContent = dog.habit;
      overlayBirthplace.textContent = dog.birthplace;
      overlayActivities.textContent = dog.activities;
  
      // Add active class to show overlay
      overlay.classList.add('active');
    };
  
    // Function to hide overlay
    const hideOverlay = () => {
      overlay.classList.remove('active');
    };
  
    // Event listener for close button
    closeButton.addEventListener('click', hideOverlay);
  
    // Event listener to close overlay when clicking outside the content
    window.addEventListener('click', (e) => {
      if (e.target === overlay) {
        hideOverlay();
      }
    });
  
    // Initialize the dog cards
    createDogCards();
});
