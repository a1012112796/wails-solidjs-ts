import {render} from 'solid-js/web';
import {onMount, createSignal} from 'solid-js';

import {Greet} from '../wailsjs/go/main/App';

import './main.css';

function App() {
    let inputRef: HTMLInputElement | undefined;
    const [test, setTest] = createSignal("Please enter your name below 👇");

    onMount(() => {
        console.log(inputRef);
        inputRef?.focus();
    });

    const onGreet = async () => {
        if (inputRef == undefined) {
            return;
        }

        var name = inputRef.value;
        if (name.length == 0)
        {
            return;
        }

        const result = await Greet(name);
        setTest(result);
    }

    return (
    <>
        <div class="logo"></div>
        <div class="result" id="result">{test()}</div>
        <div class="input-box" id="input">
          <input ref={inputRef} class="input" id="name" type="text" autocomplete="off" />
          <button class="btn" onclick={onGreet}>Greet</button>
        </div>
    </>
    );
}

render(App, document.getElementById('app') as HTMLElement);
