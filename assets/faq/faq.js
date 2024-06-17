document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector("body").classList.add("loaded");
    }, 500);
});

// The FAQ Data
const faq = [
    {
        question: "What is Ocean Calculators?",
        answer:
            "Ocean Calculators is a collection of customized calculators for various mathematical aspects. It allows individuals with basic web development knowledge to create unique calculators and contribute through pull requests.",
    },
    {
        question: "What technologies are used in Ocean Calculators?",
        answer: "Ocean Calculators is built using HTML, CSS, and JavaScript.",
    },
    {
        question: "How can I access the live project?",
        answer:
            'The live project is accessible at <a href="https://calcdiverse.netlify.app/" target="_blank">Ocean Calculators</a>',
    },
    {
        question: "How can I get started with contributing to Ocean Calculators?",
        answer:
            'To contribute, you can fork the repository, clone it to your local system, and open the `index.html` file in your browser. Detailed contribution steps are provided in the "Getting Started" section.',
    },
    {
        question: "What should I do if I find a bug or want to add a feature?",
        answer:
            'You can raise an issue, and after it\'s assigned to you, you can proceed to make the changes. Follow the steps outlined in the "Getting Started" section for contributing.',
    },
    {
        question: "How can I add a new calculator to Ocean Calculators?",
        answer:
            "To add a new calculator, create a folder in the Calculators directory, put your calculator's code files in it, and add a README.md file with a description, tech stacks, and screenshots. Update the main `index.html` file to include your calculator's link in the box section.",
    },
    {
        question: "What are the contributing guidelines for Ocean Calculators?",
        answer:
            'You can find the contributing guidelines in the "Contributing Guidelines" section. It covers the development process, bug fixes, improvements, and how to build for Click-The-Edible-Game.',
    },
    {
        question: "Is there a Code of Conduct for contributors?",
        answer:
            'Yes, this project follows a Code of Conduct. All contributors are expected to uphold this code, and it can be found in the "Code Of Conduct" section.',
    },
    {
        question: "Has Ocean Calculators been part of any Open Source Programs?",
        answer:
            "Yes, Ocean Calculators has been part of Open Source Programs, including IWOC2024, JWOC2024, and SWOC2024.",
    },
    {
        question: "Who is the Project Admin for Ocean Calculators?",
        answer: "The Project Admin for Ocean Calculators is Rakesh Roshan.",
    },
    {
        question: "Can anyone contribute to Ocean Calculators?",
        answer:
            'Yes, contributions of any kind from anyone are always welcome, as mentioned in the "Contributing is fun" section.',
    },
    {
        question: "How can I celebrate my successful pull request?",
        answer:
            'After your pull request is merged successfully, you are encouraged to celebrate your success, as mentioned in the "Celebrate your success" section.',
    },
];

/**
 *
 * @param {MouseEvent} e
 */

// The Function to toggle the FAQ Content
function toggleContent(e) {
    const content = e.currentTarget.faqContent;
    content.show = !content.show;

    content.style.height = content.show
        ? content.scrollHeight + 20 + `px`
        : `0px`;
    content.style.padding = content.show ? `10px 0` : `0`;

    const plus = e.currentTarget.plus;
    plus.style.transform = content.show ? `rotate(45deg)` : `none`;
}

// The Template Function for the FAQ
faq.forEach(function (item, index) {
    const faqItem = document.createElement(`div`);
    faqItem.classList.add(`faq`);
    faqItem.innerHTML = `
            <div class="faq_title">
                <span>${item.question}</span>
                <div class="plusBtn">
                  <svg
                  class="plus"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ff1b82"
                  viewBox="0 0 16 16"
                  stroke-width="2"
                  stroke="#ff1b82"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 0a.75.75 0 01.75.75v6.5h6.5a.75.75 0 010 1.5h-6.5v6.5a.75.75 0 01-1.5 0v-6.5H.75a.75.75 0 010-1.5h6.5V.75A.75.75 0 018 0z"
                    />
                  </svg>
                <div>
            </div>
        `;

    faqItem.plus = faqItem.querySelector(`.plus`);

    const faqContent = document.createElement(`div`);
    faqContent.classList.add(`faq_content`);
    faqContent.innerHTML = item.answer;
    faqItem.appendChild(faqContent);

    faqItem.faqContent = faqContent;

    faqItem.addEventListener(`click`, toggleContent);
    document.querySelectorAll(`.faqs_container`)[index % 2].appendChild(faqItem);
});
