<template>
    <div v-if="show" class="popup-overlay">
      <div class="popup">
        <div class="header" :style="{ background: headerBackground }">
          <h2>1 Minute</h2>
          
        </div>
       
        <div class="section">
            <h3 class="choice" :style="{ color: headerBackground }">Choose {{ choice }}</h3>
          <div class="section-title">Amount</div>
          <div class="amount-buttons" >
            <button @click="setAmount(1)" :class="{ active: amount === 1 }" :style="{ background: headerBackground }">1</button>
            <button @click="setAmount(10)" :class="{ active: amount === 10 }" :style="{ background: headerBackground }">10</button>
            <button @click="setAmount(100)" :class="{ active: amount === 100 }" :style="{ background: headerBackground }">100</button>
            <button @click="setAmount(1000)" :class="{ active: amount === 1000 }" :style="{ background: headerBackground }">1000</button>
          </div>
        </div>
        <div class="section" >
          <div class="section-title">Quantity</div>
          <div class="quantity-buttons">
            <button @click="decreaseQuantity" :style="{ background: headerBackground }">-</button>
            <input type="number" v-model="quantity" readonly :style="{ background: headerBackground }">
            <button @click="increaseQuantity" :style="{ background: headerBackground }">+</button>
          </div>
        </div>
        <div class="section">
          <div class="multiplier-buttons" >
            <button @click="setMultiplier(1)" :class="{ active: multiplier === 1 }">X1</button>
            <button @click="setMultiplier(5)" :class="{ active: multiplier === 5 }">X5</button>
            <button @click="setMultiplier(10)" :class="{ active: multiplier === 10 }">X10</button>
            <button @click="setMultiplier(20)" :class="{ active: multiplier === 20 }">X20</button>
            <button @click="setMultiplier(50)" :class="{ active: multiplier === 50 }">X50</button>
            <button @click="setMultiplier(100)" :class="{ active: multiplier === 100 }">X100</button>
          </div>
        </div>
        <div class="rules-section">
          <input type="checkbox" id="rules" v-model="rules">
          <label for="rules" :style="{ color: headerBackground }">Pre-Selling</label>
        </div>
        <div class="total-amount" :style="{ color: headerBackground }">
          Total Amount: {{ totalAmount }}
        </div>
        <div class="buttons">
          <button @click="closePopup" class="cancel-button">Cancel</button>
          <button class="confirm-button" @click="confirmBet" :style="{ background: headerBackground }">Total Amount {{ totalAmount }}</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      show: Boolean,
      choice: String
    },
    data() {
      return {
        amount: 1,
        quantity: 1,
        multiplier: 1,
        rules: false
      }
    },
    computed: {
      totalAmount() {
        return this.amount * this.quantity * this.multiplier;
      },
      headerBackground() {
      // Conditionally set the background color based on the value of 'choice'
      return this.choice === 'Small' ? '#7ca5f2' : 'linear-gradient(90deg, #f7ba2a, #ffa500)';
    }
    },
    methods: {
      setAmount(value) {
        this.amount = value;
      },
      increaseQuantity() {
        this.quantity++;
      },
      decreaseQuantity() {
        if (this.quantity > 1) {
          this.quantity--;
        }
      },
      setMultiplier(value) {
        this.multiplier = value;
      },
      closePopup() {
        this.$emit('close');
      },
      confirmBet() {
        let values = {
            choice: this.choice,
            amount: this.totalAmount
        }
      this.$emit('bet-confirmed', values);
      this.closePopup();
    }
    }
  }
  </script>
  
  <style scoped>
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background: transparent;
    pointer-events: none;
  }
  
  .popup {
    background: white;
    padding: 20px;
    border-radius: 20px 20px 0 0;
    width: 95%;
    max-width: 30%;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    pointer-events: auto;
  }
  
  .header {
    background: linear-gradient(90deg, #f7ba2a, #ffa500);
    border-radius: 20px 20px 0 0;
    padding: 10px;
    text-align: center;
    position: relative;
  }
  
  h2 {
    margin: 0;
    font-size: 24px;
    color: white;
  }
  
  .choice {
    width: 100%;
    text-align: center;
    color: #f7ba2a;
  }
  
  .section {
    margin: 10px 0;
    text-align: center;
  }
  
  .section-title {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .amount-buttons button,
  .quantity-buttons button,
  .multiplier-buttons button {
    margin: 5px;
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 10px;
    cursor: pointer;
  }
  
  .amount-buttons button.active,
  .multiplier-buttons button.active {
    /* background-color: #f7ba2a; */
    color: white;
    /* border-color: #f7ba2a; */
  }
  
  .quantity-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .quantity-buttons button {
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 10px;
    cursor: pointer;
    /* background-color: #f7ba2a; */
    color: white;
  }
  
  .quantity-buttons input {
    width: 50px;
    text-align: center;
    margin: 0 10px;
    border: none;
    font-size: 18px;
    /* background-color: #f7ba2a; */
    color: white;
    border-radius: 5px;
  }
  
  .rules-section {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .rules-section label {
    margin-left: 5px;
    /* color: #f7ba2a; */
  }
  
  .rules-section input[type="checkbox"] {
    accent-color: #f7ba2a;
  }
  
  .total-amount {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    /* color: #f7ba2a; */
  }
  
  .buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .cancel-button,
  .confirm-button {
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
  
  .cancel-button {
    background-color: #ccc;
    color: white;
  }
  
  .confirm-button {
    /* background-color: #f7ba2a; */
    color: white;
  }
  </style>
  