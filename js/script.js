const { createApp } = Vue

createApp({
  data() {
    return {

      currentActive: 0,

      newMessage : '',

      name : '',

      contacts: [
        {
        name: 'Michele',
        avatar: 'img/avatar_1.jpg',
        visible: true,
        messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent',
                    isDropped: false,
                    },
                    {
                      date: '10/01/2020 15:50:00',
                      message: 'Ricordati di stendere i panni',
                      status: 'sent',
                      isDropped: false,
                    },
                    {
                      date: '10/01/2020 16:15:22',
                      message: 'Tutto fatto!',
                      status: 'received',
                      isDropped: false,
                      }
                   ],
          },

          {
            name: 'Fabio',
            avatar: 'img/avatar_2.jpg',
            visible: true,
            messages: [
                        {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        isDropped: false,
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        isDropped: false,
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        isDropped: false,
                        }
                      ],
            },
            {
            name: 'Samuele',
            avatar: 'img/avatar_3.jpg',
            visible: true,
            messages: [
                        {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        isDropped: false,
                        },
                        {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        isDropped: false,
                        },
                        {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                        isDropped: false,
                        }
                      ],
            },

            {
              name: 'Alessandro B.',
              avatar: 'img/avatar_4.jpg',
              visible: true,
              messages: [
                          {
                          date: '10/01/2020 15:30:55',
                          message: 'Lo sai che ha aperto una nuova pizzeria?',
                          status: 'sent',
                          isDropped: false,
                          },
                          {
                          date: '10/01/2020 15:50:00',
                          message: 'Si, ma preferirei andare al cinema',
                          status: 'received',
                          isDropped: false,
                          }
                        ],
              },
              {
              name: 'Alessandro L.',
              avatar: 'img/avatar_5.jpg',
              visible: true,
              messages: [
                          {
                          date: '10/01/2020 15:30:55',
                          message: 'Ricordati di chiamare la nonna',
                          status: 'sent',
                          isDropped: false,
                          },
                          {
                          date: '10/01/2020 15:50:00',
                          message: 'Va bene, stasera la sento',
                          status: 'received',
                          isDropped: false,
                          }
                        ],
              },
              {
              name: 'Claudia',
              avatar: 'img/avatar_6.jpg',
              visible: true,
              messages: [
                          {
                          date: '10/01/2020 15:30:55',
                          message: 'Ciao Claudia, hai novità?',
                          status: 'sent',
                          isDropped: false,
                          },
                          {
                          date: '10/01/2020 15:50:00',
                          message: 'Non ancora',
                          status: 'received',
                          isDropped: false,
                          },
                          {
                          date: '10/01/2020 15:51:00',
                          message: 'Nessuna nuova, buona nuova',
                          status: 'sent',
                          isDropped: false,
                          }
                        ],
              },
              {
              name: 'Federico',
              avatar: 'img/avatar_7.jpg',
              visible: true,
              messages: [
                          {
                          date: '10/01/2020 15:30:55',
                          message: 'Fai gli auguri a Martina che è il suo compleanno!',
                          status: 'sent',
                          isDropped: false,
                          },
                          {
                          date: '10/01/2020 15:50:00',
                          message: 'Grazie per avermelo ricordato, le scrivo subito!',
                          status: 'received',
                          isDropped: false,
                          }
                        ],
              },
              {
              name: 'Davide',
              avatar: 'img/avatar_8.jpg',
              visible: true,
              messages: [
                          {
                          date: '10/01/2020 15:30:55',
                          message: 'Ciao, andiamo a mangiare la pizza stasera?',
                          status: 'received',
                          isDropped: false,
                          },
                          {
                          date: '10/01/2020 15:50:00',
                          message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                          status: 'sent',
                          isDropped: false,
                          },
                          {
                          date: '10/01/2020 15:51:00',
                          message: 'OK!!',
                          status: 'received',
                          isDropped: false,
                          }
                        ]
              },
              
          ]
      
      }  
  },

  methods: {

    changeContact(i) {
     
      this.currentActive = i;
      
    },

    addMessage() {
      
      if (this.newMessage.length > 0) {
        this.contacts[this.currentActive].messages.push({date:'10/01/2020 15:51:00', message: this.newMessage, status: 'sent'});
        this.newMessage = '';
        setTimeout(() => {
          this.contacts[this.currentActive].messages.push({date:'10/01/2020 15:52:00', message: 'Ok', status: 'received'});;
    
        }, 1000);
      }
    },

    searchContact() {
      let searchLowered = this.name.toLowerCase();

      

      this.contacts.forEach((contact) => {

        let loweredName = contact.name.toLowerCase();

        if (loweredName.includes(searchLowered)) {
          contact.visible = true;
        }

        else {
          contact.visible = false;
        }
        
      });
    
    },

    deleteMessage(index) {
      this.contacts[this.currentActive].messages.splice(index, 1)
    },

    toggle(index) {
    
      if(this.contacts[this.currentActive].messages[index].isDropped == false){
            this.contacts[this.currentActive].messages[index].isDropped = true;
      } 
      else {
            this.contacts[this.currentActive].messages[index].isDropped = false;
      }

    } 

  }
  
}).mount('#app')

