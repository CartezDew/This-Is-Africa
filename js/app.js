//reference buttons
const messageEl = document.querySelector("#message");
const playButtonEl = document.querySelector("#play-button");
const newGameButtonEl = document.querySelector("#new-game-button");
const africaButtonEl = document.querySelector("#africa-button");
const rwandaButtonEl = document.querySelector("#rwanda-button");
const southAfricaButtonEl = document.querySelector("#sa-button");
const easyButtonEl = document.querySelector("#easy-button");
const mediumButtonEl = document.querySelector("#medium-button");
const hardButtonEl = document.querySelector("hard-button");
const questionDisplayEl = document.querySelector("#question-display");
const categoryButtons = document.querySelectorAll (".category-button");
const difficultyButtons = document.querySelectorAll (".difficulty-button");

//variable to store selected category & difficulty

let selectedCategory = null
let selectedDifficulty= null

 //"Let's play"




let score = 0;
let timeLeft = 90; // 1:30-minute timer
let currentQuestionIndex = 0;
let difficulty = "medium"; // Default difficulty

// Array of questions (each question is an object with statements and correct answer)
let africaEasyQuestions = {
    true: [
        "Africa is the second-largest continent in the world, covering more than 11.7 million square miles, which is about 20% of the Earth's total land area.",
        "The Nile (also known as the Nile River or River Nile) flows from south to north.",
        "Nigeria is the most populous country in Africa, with over 200 million people.",
        "The giraffe is the tallest land animal, reaching heights of 18 feet.",
        "The ancient city of Timbuktu in Mali was a major center of learning and trade.",
        "Sahara is the largest hot desert in the world.",
        "The River Nile in Africa is the longest river in the world.",
        "Africa is home to over 2,000 languages, making it the most linguistically diverse continent.",
        "Madagascar, the fourth-largest island in the world, is home to unique wildlife found nowhere else.",
        "Charlize Theron is a South African and American actress and producer."
    ],
    lie: [
        "The Congo Rainforest is the largest tropical rainforest in the world.",
        "Africa is the largest country in the world, followed by Russia, then Canada.",
        "The Great Wall of Africa is an ancient structure built to protect the continent from invaders.",
        "Africa is a country with one president overseeing all 54 nations.",
        "Former NBA All-Star Dikembe Mutombo was born in Algeria.",
    ],
    correctAnswer: [
        "The Amazon Rainforest is the world's largest tropical rainforest, while the Congo Rainforest (also known as the Congo Basin) is the second-largest.",
        "Africa is a continent, not a country, and the largest country by land area is Russia, followed by Canada.",
        "There is no 'Great Wall of Africa'; this is a fictional concept.",
        "Africa is a continent, not a country, with 54 independent nations.",
        "Former NBA All-Star Dikembe Mutombo was born in the Democratic Republic of the Congo.",
    ]
};
let africaMediumQuestions = {
    true: [
        "Africa has the youngest population in the world, with over 50% of the population under the age of 20",
        "Africa is the cradle of humanity, with fossil evidence showing that modern humans first appeared there around 300,000 years ago.",
        "The oldest university in the world, Al-Qarawiyyin, was founded in 859 AD in Fez, Morocco.",
        "Liberia was founded by freed African-American slaves in the 19th century",
        "Africa produces 70% of the world's cocoa beans, mostly from Ivory Coast and Ghana",
        "The Honey Badger is known for being one of the toughest animals in Africa",
        "'Young, Famous & African' is Netflix's first reality series featuring an all-African cast",
        "The majority of the Netflix series  'Young, Famous & African' was filmed in Johannesburg, South Africa",
        "Sudan has more pyrmaids than Egypt",
        "Africa is the only continent that stretches across all four hemispheres.",
        "Bob Marley performed at Zimbabwe's Independence Day celebration ",
        "In the DRC, only 1.8% of existing roads are tarred and less than 10% of the population has access to electricity today.",
        "The Congo River is the deepest river in the world",
        "Some areas, like Lesotho and parts of South Africa, experience snow during winter!",
        "The Zulu tribe in South Africa is one of the largest ethnic groups on the continent.",
        "Zambia and Zimbabwe share one of the world's largest waterfalls, Victoria Falls.",
        "The cheetah, found in Africa, is the fastest land animal",
        "Ethiopia is one of the few African countries that was never colonized.",
        "The Netflix series, 'Young, Famous & African', features cast members from multiple African countries, including South Africa, Nigeria, and Tanzania",
        "The Netflix series, 'Young, Famous & African', gives insight into the luxurious lifestyles of African entertainers and influencers",
        "As of 2024, Cairo Egypt is the largest populated City in Africa.",
        "Djibouti has one of the saltiest bodies of water in the world, Lake Assal.",
        "The DRC was formerly known as Zaire and underwent a complex history, including colonial rule by Belgium, independence in 1960, and subsequent name changes.",
        "The DRC is home to the Congo River, the second most voluminous river in the world, and the Congo Basin, the world's second-largest tropical rainforest.",
    ],
    lie: [
        "The official language of Africa is Swahili, which all Africans speak.",
        "African economies are so small that no country has a stock market.",
        "Mount Everest is the tallest mountain in Africa.",
        "Although there are many languages spoken in Africa, African is the most widely spoken.",
        "Africa countries have never had a female president as a head of state.",
        "The show primarily follows the lives of business moguls and political leaders in Africa.",
        "All cast members are originally from South Africa.",
        "Africa is the driest continent in the world. ",
        "All African countries gained independence in the 1800s.",
        "There are no penguins in Africa",
        "Nigeria hosts the United Nations' largest peacekeeping mission in the world, with over 21,000 soldiers from approximately 50 different countries.",
    ],
    correctAnswer: [
        "Africa is home to over 2,000 languages, making it the most linguistically diverse continent.",
        "False! Africa has multiple stock markets, including the Johannesburg Stock Exchange (JSE), one of the biggest in the world.",
        "Mount Everest is in Asia; Africa's highest peak is Mount Kilimanjaro.",
        "African is not a language. Africa is home to over 2,000 languages, making it the most linguistically diverse continent.",
        "False! Several African countries have had female presidents, including Ellen Johnson Sirleaf of Liberia, the first female African head of state.",
        "Lie - The show focuses on African celebrities, entertainers, and influencers, not business or political figures",
        "Lie- The show includes stars from multiple countries like Nigeria, Uganda, and Tanzania.",
        "While Africa experiences significant water scarcity and desertification, it's not the driest continent globally; Antarctica is considered the driest continent.",
        "Most African nations gained independence in the mid-20th century, not the 1800s.",
        "Penguins do live in Africa- mainly off the coasts of southern Africa and nearby islands. Unfortunately, the species is on the brink of extinction. ",
        "The Democratic Republic of the Congo hosts the United Nations' largest peacekeeping mission in the world, with over 21,000 soldiers from approximately 50 different countries.",
    ],
};
let rwandaEasyQuestions = {
    true: [
        "Rwanda is known as the 'Land of a Thousand Hills' due to its mountainous terrain.",
        "Kigali, the capital of Rwanda, is considered one of the cleanest cities in Africa.",
        "The Kigali Genocide Memorial honors the victims of the 1994 genocide.",
        "Rwanda was one of the first African countries to ban plastic bags in 2008.",
        "RwandAir is Rwanda's national airline, offering flights across Africa and beyond.",
        "Moto-taxis are a common and popular means of transportation in Kigali.",
        "Rwanda is striving to become a tech hub in Africa, often referred to as 'Silicon Kigali'.",
        "The film 'Hotel Rwanda' (2004) was inspired by the actions of Paul Rusesabagina and the events at Hôtel des Mille Collines.",
        "In 1994, Rwanda experienced a horrific genocide where nearly one million people, primarily Tutsis, were killed by Hutu extremists in a period of 100 days.",
        "Rwanda's climate is tropical but modified by its high elevation, making it cooler than other equatorial countries.",
        "Umuganda, a nationwide community service day, takes place on the last Saturday of every month.",
        "Rwanda's population is made up mostly of Hutus and Tutsis.",
        "Paul Kagame is a Rwandan politician and former military officer who has been the President of Rwanda since 2000",
        "Tourism is one of Rwanda's fastest-growing industries, particularly gorilla trekking.",
        "The country's economic growth rate has been one of the highest in Africa in recent years.",
        "Rwanda's education system includes instruction in multiple languages.",
        "The genocide ended in July 1994 when the Rwandan Patriotic Front (RPF), led by Paul Kagame, took control of the country.",
        "The genocide was largely triggered by the assassination of Rwandan President Juvénal Habyarimana when his plane was shot down.",
    ],
    lie: [
        "Rwanda is a landlocked country with no lakes or rivers.",
        "Kigali is one of the most polluted cities in Africa.",
        "Rwanda is home to the highest mountain in Africa, Mount Kilimanjaro.",
        "Plastic bags are still widely used in Rwanda.",
        "RwandAir is banned from flying to Europe due to safety concerns.",
        "Public transport in Kigali is limited to only private cars and bicycles.",
        "Rwanda has no interest in technology development and digital innovation.",
        "The 2024, Hollywood film, 'Hotel Rwanda' was filmed entirely in Kigali, Rwanda.",
        "The international community responded immediately to stop the genocide and prevent further killings.",
    ],
    correctAnswer: [
        "Rwanda has many lakes, including Lake Kivu, and several rivers.",
        "Kigali is considered one of the cleanest cities in Africa, not polluted.",
        "Mount Kilimanjaro is in Tanzania, not Rwanda.",
        "Plastic bags have been banned in Rwanda since 2008.",
        "RwandAir flies internationally and is not banned from Europe.",
        "Kigali has a well-organized public transport system, including buses and moto-taxis.",
        "Rwanda is actively investing in technology and digital innovation.",
        "Most of *Hotel Rwanda* was filmed in South Africa, not in Rwanda.",
        "The international community failed to intervene in a meaningful way until after the genocide had already ended.",
    ],
};
let rwandaMediumQuestions = {
    true: [
        "Rwanda has four official languages: Kinyarwanda, French, English, and Swahili.",
        "Lake Kivu, one of Africa's Great Lakes, lies on the border of Rwanda and the Democratic Republic of the Congo.",
        "Rwanda has the highest percentage of women in parliament in the world.",
        "The national currency of Rwanda is the Rwandan Franc (RWF).",
        "Rwanda's tea and coffee industries are vital contributors to its economy.",
        "Akagera National Park is home to the Big Five: lions, leopards, rhinos, elephants, and buffalo.",
        "Rwanda gained independence from Belgium on July 1, 1962.",
        "Rwanda has one of the highest internet penetration rates in Africa.",
        "Every last Saturday of every month from 8am to 11am people nationwide participate in community projects. It's known as Umuganda and its mandatory. People all over the country take part in cleaning the streets, helping to build schools, cutting grass, etc. ",
        "The Nyungwe Forest National Park is one of Africa's oldest rainforests and home to chimpanzees.",
        "Kigali is considered one of Africa's safest cities.",
        "Rwanda is a leader in environmental conservation and reforestation.",
        "In Rwanda, over 90% of the population has access to health insurance.",
        "Rwanda's government actively promotes gender equality and women's empowerment.",
        "The 'One Cow per Poor Family' program helps combat malnutrition in rural areas.",
        "Traditional Rwandan homes were once built using woven bamboo and thatch.",
        "Basket weaving is a well-known traditional craft in Rwanda.",
        "Before Rwanda became part of the Belgian Empire after WWI, it was part of Germany, together with Tanzania.",
    ],
    lie: [
        "French is the most widely spoken language in Rwanda.",
        "Rwanda is the largest country in East Africa by land area.",
        "The majority of Rwanda's land is covered in desert.",
        "The national currency of Rwanda is the East African Shilling.",
        "Rwanda's primary exports are oil and diamonds.",
        "The Big Five are not found in Rwanda's national parks.",
        "Rwanda is still under Belgian rule.",
        "Rwanda's tourism industry is declining due to political instability.",
        "The United Nations sent reinforcements immediately upon learning of the genocide.",
    ],
    correctAnswer: [
        "Kinyarwanda is the most widely spoken language, not French.",
        "Rwanda is a small landlocked country; Tanzania is the largest in East Africa.",
        "Rwanda has a green, mountainous landscape, not desert.",
        "Rwanda's official currency is the Rwandan Franc, not the East African Shilling.",
        "Rwanda's primary exports include coffee and tea, not oil and diamonds.",
        "Akagera National Park is home to the Big Five animals.",
        "Rwanda has been independent since 1962.",
        "Tourism in Rwanda is growing, especially due to eco-tourism and gorilla trekking.",
        "The UN had peacekeepers in Rwanda but did not send immediate reinforcements to stop the genocide.",
    ],
};
let southAfricaEasyQuestions = {
    true: [
        "The Big Five game animals can all be found in South Africa.",
        "Nelson Mandela was imprisoned for 27 years before becoming President.",
        "South Africa is the world's largest producer of platinum.",
        "Rugby is one of the most popular sports in South Africa.",
        "Table Mountain overlooks the city of Cape Town.",
        "South Africa is a member of the BRICS economic group.",
        "The first human-to-human heart transplant was performed in South Africa.",
        "South Africa is often called the 'Rainbow Nation' due to its diverse cultures.",
        "Naminia and Botswana borders South Africa to the west.",
        "South Africa drives on the left side of the road.",
        "South Africa is home to some of the world's oldest gold mines.",
        "The national bird of South Africa is the Blue Crane.",
        "Apartheid officially ended in 1994 with the first multiracial elections.",
        "Johannesburg is home to the largest stock exchange in Africa.",
        "South Africa hosted the FIFA World Cup in 2010.",
        "The Kruger National Park is one of Africa's largest game reserves.",
        "The African National Congress (ANC) has been the ruling party since the end of apartheid.",
        "Pratley's Putty, used on the Apollo 11 mission, was invented in South Africa.",
        "Zulu is one of the most spoken languages in South Africa.",
        "Zimbabwe borders South Africa to the north",
        "South Africa is home to the Big Five: lion, leopard, rhinoceros, elephant, and buffalo.",
        "South Africa is one of the largest producers of wine in the world.",
    ],
    lie: [
        "South Africa is home to the world's largest population of wild lions.",
        "The Boer Wars were fought between the British and indigenous African tribes.",
        "The South African Rand is the strongest currency in Africa.",
        "Cricket is banned in South Africa.",
        "Victoria Falls is located on the border of South Africa and Zimbabwe.",
        "South Africa has never had a female Deputy President.",
        "South Africa developed the CAT scan technology.",
        "The majority of South Africans live in rural areas.",
        "Rwanda boarders South Africa to the east.",
        "'The Lion King' is based on South African folklore.",
        "South Africa has no active diamond mines.",
    ],
    correctAnswer: [
        "While South Africa has a significant lion population, countries like Tanzania have larger wild lion populations.",
        "The Boer Wars were fought between the British and Dutch settlers known as Boers.",
        "While the Rand is widely used, other African currencies like the Botswana Pula have been stronger.",
        "Cricket is a popular sport in South Africa and is not banned.",
        "Victoria Falls is on the border of Zambia and Zimbabwe, not South Africa.",
        "South Africa has had female Deputy Presidents, including Phumzile Mlambo-Ngcuka.",
        "The CAT scan was developed by British engineer Godfrey Hounsfield and South African physicist Allan Cormack.",
        "South Africa has a significant urban population, with many living in cities.",
        "While Rwanda is located in East Africa, it doesn't boarder South Africa.",
        "'The Lion King' is inspired by Shakespeare’s Hamlet, not South African folklore.",
        "South Africa has some of the world's most productive diamond mines, including in Kimberley.",
    ],
};
let southAfricaMediumQuestions = {
        true: [
        "South Africa voluntarily gave up its nuclear weapons in the early 1990s.",
        "South Africa is one of the few African countries where regenerative farming is being promoted.",
        "Many South African businesses promote the philosophy of Ubuntu in their operations.",
        "South Africa has three capital cities: Pretoria, Bloemfontein, and Cape Town.",
        "South Africa recognizes 11 official languages.",
        "The University of Cape Town is the oldest university in South Africa.",
        "Amapiano originated in the townships of South Africa in the 2010s. The genre is a fusion of house, jazz, and Kwaito music. The word 'amapiano' comes from the Zulu word for 'the pianos'.",
        "'Young, Famous & African' is Netflix's first reality series featuring an all-African cast",
        "The majority of the Netflix series  'Young, Famous & African' was filmed in Johannesburg, South Africa",
        "South Africa is home to one of the world's first heart transplants, performed in 1967.",
        "South Africa has nine provinces, each with its own unique cultural identity.",
        "A significant portion of South Africa's workforce is employed in the tourism industry.",
        "The Drakensberg is the highest mountain range in South Africa.",
        "Afrikaans is derived from Dutch and is one of the official languages.",
        "South Africa has a literacy rate of over 90%.",
        "'Born a Crime: Stories' from a South African Childhood is an autobiographical comedy book written by South African comedian Trevor Noah",
        "The Netflix series, 'Young, Famous & African', features cast members from multiple African countries, including South Africa, Nigeria, and Tanzania",
        "The Netflix series, 'Young, Famous & African', gives insight into the luxurious lifestyles of African entertainers and influencers",
    ],
    lie: [
        "South Africa is still developing nuclear weapons as part of its defense strategy.",
        "Regenerative farming is illegal in South Africa due to land restrictions.",
        "Ubuntu is a term used only in religious settings and has no influence in business.",
        "The Kalahari Desert spans the entire northern border of South Africa.",
        "English is the most widely spoken home language in South Africa.",
        "Education is compulsory only up to the age of 16.",
        "Vusi Sidney Mahlasela Ka Zwane (born 1965) is a legendary, Zulu South African singer-songwriter, born in Cape Town. ",
        "The show primarily follows the lives of business moguls and political leaders in Africa.",
        "All cast members are originally from South Africa.",  
    ],
    correctAnswer: [
        "South Africa voluntarily dismantled its nuclear weapons and does not develop them anymore.",
        "Regenerative farming is encouraged in South Africa to improve soil health and sustainability.",
        "Ubuntu is widely practiced in business, education, and community development across South Africa.",
        "The Kalahari Desert extends into parts of South Africa but does not span the entire northern border.",
        "While English is widely used, it is not the most common home language; languages like Zulu and Xhosa are more prevalent.",
        "Education is compulsory up to the age of 15.",
        "Vusi Mahlasel was born in Pretoria's Mamelodi Township",
        "The show focuses on African celebrities, entertainers, and influencers, not business or political figures",
        "The show includes stars from multiple countries like Nigeria, Uganda, and Tanzania.",   
    ],
};
let southAfricaHardQuestions = {
    true: [
        "Daniel F. Malan was South Africa's fourth Prime Minister and introduced apartheid.",
        "Soweto stands for 'South Western Townships' and was originally created by British colonial authorities.",
        "South Africa's Discovery Bank was founded in the 1990s and dominates the medical insurance market.",
        "Fences at Kruger National Park were originally built to prevent disease transmission between wild animals.",
        "South Africa is the only country to have developed nuclear weapons and later voluntarily dismantled them.",
        "Cape Town is called 'The Mother City' because it was South Africa's first major metropolis.",
        "The philosophy of 'Ubuntu' means 'I am because we are,' emphasizing community and interdependence.",
        "South Africa is the 7th largest wine producer in the world.",
        "The South African banking sector is more regulated than Nigeria's, preventing major bank collapses in 2008.",
        "South African medical insurance often covers traditional healing services, such as visits to Sangomas (spiritual healers).",
        "Robben Island was used as a prison for political activists, including Nelson Mandela.",
        "The Cape of Good Hope was originally named the 'Cape of Storms' by Portuguese explorers.",
        "Johannesburg was built on one of the world's largest gold deposits.",
        "Before 1994, South Africa had only white presidents.",
        "The Amy Foundation provides educational programs for children in South African townships.",
        "South Africa has three capital cities: Pretoria, Bloemfontein, and Cape Town.",
        "Sangomas are traditional South African healers who provide spiritual and medicinal guidance.",
        "Hendrik Verwoerd, the so-called 'Father of Apartheid,' was a member of a secret Afrikaner nationalist organization.",
        "During apartheid, only men were allowed to rent homes in Soweto from the government.",
        "Unlike many countries, South Africa has strict banking regulations, which helped it avoid the 2008 global banking crisis.",
        "South Africa enforces a 'shoot-to-kill' policy against poachers in some areas.",
        "The Democratic Alliance (DA) is South Africa's second-largest political party and traces its roots to the anti-apartheid movement.",
        "South Africa has 11 official languages, making it one of the most linguistically diverse countries in the world.",
        "Khayelitsha Cookies is a social enterprise that empowers women by giving them employment in baking.",
        "Noble Hill is one of only 11 organic wine farms in South Africa.",
        "Workshop 17 is a co-working space designed to support innovation and entrepreneurship in South Africa.",
        "Regenerative farming is an approach used by some South African farms to restore soil health and increase biodiversity.",
        "Leprosy patients were once exiled to Robben Island under colonial rule.",
        "Cape Town is home to the largest Muslim population in South Africa.",
        "Sandton is the wealthiest square mile in all of Africa.",
        "The rand was officially introduced as South Africa's currency in 1961.",
        "South Africa's economy heavily depends on its mining industry.",
        "Traditional healing is often included in medical insurance coverage in South Africa.",
        "Many South African businesses prioritize social impact over profit margins.",
    ],
    lie: [
        "Nelson Mandela was the first Black South African to serve as Prime Minister before becoming President.",
        "The term 'Rand' in South Africa's currency is derived from a local African word for gold.",
        "Nigeria has a more regulated banking system than South Africa, making it the safest financial hub in Africa.",
        "Kruger National Park was originally created as a tourist attraction to promote safaris.",
        "Before 1994, Black South Africans were allowed to serve in the military but not in police forces.",
        "The Cape of Good Hope is the southernmost point of Africa.",
        "The Amy Foundation was named after a South African activist who fought against apartheid.",
        "South African wine is only made using imported grape varieties from Europe.",
        "Discovery Bank offers grants to support small businesses in South Africa's lower-income communities.",
        "Food waste contributes to over 15% of global carbon emissions, making it a major environmental issue.",
        "Robben Island was first used as a resort island before becoming a prison.",
        "The Cape of Good Hope is where the Atlantic and Indian Oceans officially meet.",
        "Johannesburg is located near the coast and has a large seaport for global trade.",
        "South Africa was a democracy long before apartheid was abolished.",
        "The Amy Foundation was started by a South African politician to promote racial segregation.",
        "Cape Town is the only capital city in South Africa.",
        "Sangomas only practice in rural areas and are not recognized in urban South Africa.",
    ],
    correctAnswer: [
        "South Africa never had a Prime Minister after apartheid; Mandela was the first Black President.",
        "'Rand' comes from the Dutch/Afrikaans word for 'ridge,' referring to Johannesburg's gold-rich Witwatersrand.",
        "South Africa has stricter banking regulations than Nigeria.",
        "Kruger National Park was originally established to protect game animals for hunting, not tourism.",
        "Before 1994, Black South Africans were excluded from both the military and police forces, except as interpreters.",
        "The southernmost point is Cape Agulhas, not the Cape of Good Hope.",
        "The Amy Foundation was named after an American activist, Amy Biehl, who was killed in South Africa.",
        "South Africa grows its own grapes and even has unique indigenous varieties like Pinotage.",
        "Discovery Bank does not offer grants to small businesses; they only work in industries they specialize in.",
        "Food waste accounts for about 6% of global carbon emissions, not 15%.",
        "Robben Island was historically used for lepers and prisoners, never as a resort.",
        "The official divide between the Atlantic and Indian Oceans is at Cape Agulhas, not the Cape of Good Hope.",
        "Johannesburg is inland and does not have a port—it is a landlocked city.",
        "Before 1994, South Africa was ruled by an all-white government under apartheid.",
        "The Amy Foundation was founded by Amy Biehl's parents to promote peace and education, not segregation.",
        "South Africa has three capital cities: Pretoria (executive), Bloemfontein (judicial), and Cape Town (legislative).",
        "Sangomas practice in both rural and urban areas, and some medical insurers recognize their services.",       
    ],
};


//------------Functions-------------------------------------------------------------------------------------------------------------------


function getRandomAfricaEasyQuestion (){
    
    let selectedTruths= [];
    //Loop twice to get two unique random truths
    for (let i= 0; i <2; i++) {
        
        let randomIndex = Math.floor(Math.random() * africaEasyQuestions.true.length);
        let truth = africaEasyQuestions.true.splice(randomIndex, 1)[0]; //extract the actual string
        selectedTruths.push(truth); //push two truth strings into the new array
    };
    
    const randomIndex = Math.floor(Math.random() * africaEasyQuestions.lie.length);
    const randomLie = africaEasyQuestions.lie.splice(randomIndex, 1)[0];
    const correctAnswer = africaEasyQuestions.correctAnswer.splice(randomIndex, 1)[0];
    
    return {
        truth: selectedTruths,
        lie: randomLie,
        explanation: correctAnswer
    };
};

function getRandomAfricaMediumQuestion  (){

    let selectedTruths= [];
    //Loop twice to get two unique random truths
    for (let i= 0; i <2; i++) {

        let randomIndex = Math.floor(Math.random() * africaMediumQuestions.true.length);
        let truth = africaMediumQuestions.true.splice(randomIndex, 1)[0]; //extract the actual string
        selectedTruths.push(truth); //push two truth strings into the new array
    };
    
    const randomIndex = Math.floor(Math.random() * africaMediumQuestions.lie.length);
    const randomLie = africaMediumQuestions.lie.splice(randomIndex, 1)[0];
    const correctAnswer = africaMediumQuestions.correctAnswer.splice(randomIndex, 1)[0];
    
    return {
        truth: selectedTruths,
        lie: randomLie,
        explanation: correctAnswer
    };
};   

function getRandomRwandaEasyQuestion (){
    
    let selectedTruths= [];
    //Loop twice to get two unique random truths
    for (let i= 0; i <2; i++) {
        
        let randomIndex = Math.floor(Math.random() * rwandaEasyQuestions.true.length);
        let truth = rwandaEasyQuestions.true.splice(randomIndex, 1)[0]; //extract the actual string
        selectedTruths.push(truth); //push two truth strings into the new array
    };
    
    const randomIndex = Math.floor(Math.random() * rwandaEasyQuestions.lie.length);
    const randomLie = rwandaEasyQuestions.lie.splice(randomIndex, 1)[0];
    const correctAnswer = rwandaEasyQuestions.correctAnswer.splice(randomIndex, 1)[0];
    
    return {
        truth: selectedTruths,
        lie: randomLie,
        explanation: correctAnswer
    };
};

function getRandomRwandaMediumQuestion  (){

    let selectedTruths= [];
    //Loop twice to get two unique random truths
    for (let i= 0; i <2; i++) {

        let randomIndex = Math.floor(Math.random() * rwandaMediumQuestions.true.length);
        let truth = rwandaMediumQuestions.true.splice(randomIndex, 1)[0]; //extract the actual string
        selectedTruths.push(truth); //push two truth strings into the new array
    };
    
    const randomIndex = Math.floor(Math.random() *rwandaMediumQuestions.lie.length);
    const randomLie = rwandaMediumQuestions.lie.splice(randomIndex, 1)[0];
    const correctAnswer = rwandaMediumQuestions.correctAnswer.splice(randomIndex, 1)[0];
    
    return {
        truth: selectedTruths,
        lie: randomLie,
        explanation: correctAnswer
    };
};   

function getSAEasyQuestion (){
    
    let selectedTruths= [];
    //Loop twice to get two unique random truths
    for (let i= 0; i <2; i++) {
        
        let randomIndex = Math.floor(Math.random() * southAfricaEasyQuestions.true.length);
        let truth = southAfricaEasyQuestions.true.splice(randomIndex, 1)[0]; //extract the actual string
        selectedTruths.push(truth); //push two truth strings into the new array
    };
    
    const randomIndex = Math.floor(Math.random() * southAfricaEasyQuestions.lie.length);
    const randomLie = southAfricaEasyQuestions.lie.splice(randomIndex, 1)[0];
    const correctAnswer = southAfricaEasyQuestions.correctAnswer.splice(randomIndex, 1)[0];
    
    return {
        truth: selectedTruths,
        lie: randomLie,
        explanation: correctAnswer
    };
};

function getRandomSAMediumQuestion  (){

    let selectedTruths= [];
    //Loop twice to get two unique random truths
    for (let i= 0; i <2; i++) {

        let randomIndex = Math.floor(Math.random() * southAfricaMediumQuestions.true.length);
        let truth = southAfricaMediumQuestions.true.splice(randomIndex, 1)[0]; //extract the actual string
        selectedTruths.push(truth); //push two truth strings into the new array
    };
    
    const randomIndex = Math.floor(Math.random() *southAfricaMediumQuestions.lie.length);
    const randomLie = southAfricaMediumQuestions.lie.splice(randomIndex, 1)[0];
    const correctAnswer = southAfricaMediumQuestions.correctAnswer.splice(randomIndex, 1)[0];
    
    return {
        truth: selectedTruths,
        lie: randomLie,
        explanation: correctAnswer
    };
}; 

function getRandomSAHardQuestion  (){

    let selectedTruths= [];
    //Loop twice to get two unique random truths
    for (let i= 0; i <2; i++) {

        let randomIndex = Math.floor(Math.random() * southAfricaHardQuestions.true.length);
        let truth = southAfricaHardQuestions.true.splice(randomIndex, 1)[0]; //extract the actual string
        selectedTruths.push(truth); //push two truth strings into the new array
    };
    
    const randomIndex = Math.floor(Math.random() * southAfricaHardQuestions.lie.length);
    const randomLie = southAfricaHardQuestions.lie.splice(randomIndex, 1)[0];
    const correctAnswer = southAfricaHardQuestions.correctAnswer.splice(randomIndex, 1)[0];
    
    return {
        truth: selectedTruths,
        lie: randomLie,
        explanation: correctAnswer
    };
}; 

const randomQuestion = getRandomSAHardQuestion();
console.log(randomQuestion);





//------Buttons Functions----------

// const handlebuttonSelection = (e) => {
//     const selectedButton = e.target;
//     const clickedSquareIndex = parseInt(clickedSquare.id);
  
//     if (board[clickedSquareIndex] !== "" || !gameActive) {
//       return;
//     }
  
//     handleCellPlayed(clickedSquare, clickedSquareIndex);
//     handleResultValidation();
//   };
  
//   const squareEls = document.querySelectorAll(".sqr");
  
//   squareEls.forEach((squareEl) => {
    // squareEl.addEventListener("click", handleSquareClick);
//   });


//--------------Buttons------------

// newGameButtonEl.addEventListener("click", () => {
//     gameActive = true;
//     messageEl.innerText = currentPlayerTurn();
//     document.querySelectorAll(".sqr").forEach((sqr) => (sqr.innerText = ""));
//   });

//----------Event Listeners-----------------

categoryButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        selectedCategory = event.target.dataset.category; // Get category from data attribute
        console.log(`Category selected: ${selectedCategory}`);

        if (selectedCategory === "africa-button") {
            console.log("Africa category selected. Choose difficulty.");
        } else if (selectedCategory === "rwanda") {
            console.log("Rwanda category selected. Choose difficulty.");
        } else if (selectedCategory === "sa-button") {
            console.log("South Africa category selected. Choose difficulty.");
        }
    });
});

// Add event listener to each difficulty button
difficultyButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        if (!selectedCategory) {
            console.log("Please select a category first.");
            return;
        }

        selectedDifficulty = event.target.dataset.category; // Get difficulty from data attribute
        console.log(`Difficulty selected: ${selectedDifficulty}`);

        // Example function to display a random question
        displayQuestion(selectedCategory, selectedDifficulty);
    });
});

// Function to display a question based on selected category & difficulty
function displayQuestion(category, difficulty) {
    let question;

    if (category === "africa-button") {
        if (difficulty === "easy-button") question = getRandomAfricaEasyQuestion();
        if (difficulty === "medium-button") question = getRandomAfricaMediumQuestion();
    } else if (category === "rwanda") {
        if (difficulty === "easy-button") question = getRandomRwandaEasyQuestion();
        if (difficulty === "medium-button") question = getRandomRwandaMediumQuestion();
    }

    // Display the question if found
    if (question) {
        document.querySelector("#message").innerHTML = `
            <p><strong>Truths:</strong> ${question.truth.join(" | ")}</p>
            <p><strong>Lie:</strong> ${question.lie}</p>
            <p><strong>Explanation:</strong> ${question.explanation}</p>
        `;
    }
}

//     addEventListener("click", (e) => {
//     const selectedCategory = e.target;
// console.log(selectedCategory)
//     if (selectedCategory = "africa")
//     console.log("Africa category selected. Choose difficulty.");
// });

// difficultyButtons.addEventListener("click", (e)=>{
//     const selectedDifficulty = e.target
//     console.log(selectedDifficulty)
// })

// // Event listener for selecting difficulty level
// easyButtonEl.addEventListener("click", () => {
//     if (selectedCategory) {
//         selectedDifficulty = "easy";
//         console.log("Easy difficulty selected.");
//         displayQuestion();
//     }
// });

// mediumButtonEl.addEventListener("click", () => {
//     if (selectedCategory) {
//         selectedDifficulty = "medium";
//         console.log("Medium difficulty selected.");
//         displayQuestion();
//     }
// // });

// //------------Function to get a random trivia question based on the category & difficulty selected---------

// function getRandomQuestion() {

//     if (selectedCategory === "africa" && selectedDifficulty === "easy") {
//         return getRandomAfricaEasyQuestion() ;
//     } else if (selectedDifficulty === "medium") {
//             return getRandomAfricaMediumQuestion();
//         }
    
//     }
 


// function displayQuestion() {
//     const question = getRandomQuestion();
//     if (question) {
        // questionDisplayEl.innerText =  getRandomQuestion;
// });
