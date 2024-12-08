import { franc } from 'https://esm.sh/franc-min@6?bundle';
import { dictionary } from './dictionary.js';

new Vue({
    el: '#app',
    data: {
        newMessage: '',
        messages: []
    },
    methods: {
        sendMessage() {
            if (this.newMessage !== '') {
                this.messages.push({ text: this.newMessage, type: 'user' });
                this.$nextTick(() => {
                    this.$refs.chatWindow.scrollTop = this.$refs.chatWindow.scrollHeight;
                });
                this.replyMessage(this.newMessage);
                this.newMessage = '';
            }
        },
        replyMessage(message) {
            setTimeout(() => {
                const lang = franc(message, {minLength: 5});
                var reply = lang === 'und' ? dictionary['cmn'] : dictionary[lang];
                console.log(lang);
                this.messages.push({ text: reply, type: 'bot' });
                this.$nextTick(() => {
                    this.$refs.chatWindow.scrollTop = this.$refs.chatWindow.scrollHeight;
                });
            }, 1000);
        }
    }
});
