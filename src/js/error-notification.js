const PNotify = require('@pnotify/core');
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

// const myStack = new PNotify.Stack({maxOpen: 1,});

export default function notifyError(title, text) {
    PNotify.error({
        title: title,
        text: text,
        // stack: myStack,
    });
}
