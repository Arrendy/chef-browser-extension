const insert = (content) => {
    // if(content == "generating...") {
    //     return;
    // }
    content = `Anthony's alternative: ${content}`
    const p = document.createElement('p');
    p.textContent = content;

    const directionSection = document.getElementsByClassName('directions');
    if (directionSection.length === 0) {
        return;
    }

    const step1 = directionSection[0];


    step1.prepend(p)
}

chrome.runtime.onMessage.addListener(
    // This is the message listener
    (request, sender, sendResponse) => {
        if (request.message === 'inject') {
            const { content } = request;

            const result = insert(content);

            if (!result) {
                sendResponse({ status: 'failed' });
            }

            sendResponse({ status: 'success' });
        }
    }
);