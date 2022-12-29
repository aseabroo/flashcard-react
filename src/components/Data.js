import React from 'react'

const Data =[
    {
        id: 1,
        question: 'Bid',
        answer: ' The (highest) price for which someone is willing to buy something.',
    },
    {
        id: 2,
        question: 'Offer',
        answer: ' The (lowest) price at which someone is willing to sell something.',    
    },
    {
        id: 3,
        question: 'Size',
        answer: ' The number of contracts that one is willing to trade at a given price.',
    },
    {
        id: 4,
        question: 'Make a Market',
        answer: ' To provide a bid and ask price and a quantity/size.',      
    },
    {
        id: 5,
        question: 'Spread',
        answer: ' The difference between the bid and the ask price.',
    },
    {
        id: 6,
        question: 'Hedge',
        answer: ' A trade or investment to reduce the risks of another transaction. A second bet(s) that offsets risks associated with a first bet(s).',
    },
    {
        id: 7,
        question: 'Index',
        answer: ' An instrument that tracks the performance of a market. Generally, an index will track the performance of many stocks. Examples include the Nasdaq, S&P 500, and Down Jones Industrial Average.',
    },
    {
        id: 8,
        question: 'ETF',
        answer: 'Marketable security that tracks a stock index, commodity, or other basket of assets. Behaves and trades very much like a stock.',
    },
    {
        id: 9,
        question: 'Commodity',
        answer: 'a raw material (oil, gold) or agricultural product (soybeans, corn) that can be bought and sold, normally at one prevailing price',
    },
    {
        id: 10,
        question: 'Market Participants',
        answer: 'PLEASE EDIT',
    },
    {
        id: 11,
        question: 'Trader',
        answer: 'Can define any active market participant. Traders can work for trading firms like Akuna, as well as hedge funds, banks, etc.',
    },
    {
        id: 12,
        question: 'Market Maker',
        answer: 'A specific trader willing to buy or sell an asset at a specific price at all times. Market makers constantly buy and sell related securities, with their primary responsibilities being to collect edge and manage risk.',
    },
    {
        id: 13,
        question: 'Local',
        answer: 'General term for market makers. Term comes from pit trading days, as locals stood in the pit every day.',
    },
    {
        id: 14,
        question: 'Broker',
        answer: 'A person or company that acts as an intermediary between buyers and sellers.',
    },
    {
        id: 15,
        question: 'Paper',
        answer: 'the interested parties trading against Akuna (or other market makers). Term comes from pit trading days as customer orders came via paper.',
    },
    {
        id: 16,
        question: 'Retail Client',
        answer: 'Smaller “paper” customers. For example, an individual trading at home',
    },
    {
        id: 17,
        question: 'Fill',
        answer: 'Options specific term. Another term for the completion of a trade. If a market maker trades on their bid or offer, the market maker may claim he/she “got filled”.',
    },
    {
        id: 18,
        question: 'Tick size (tick increment)',
        answer: 'Options specific term. the increment between one price level and the next smallest price level. Different products have different tick sizes. For example, the tick increment in USD is 0.01, or 1 cent tick sizes.',
    },
    {
        id: 19,
        question:'Queue Priority',
        answer: 'Options specific term. For markets that are determined “price-time”, if multiple orders are entered for the same price, the participant who entered his/her order or quote first, will trade first. This person is said to have queue priority.'
    },
    {
        id: 20,
        question:'Settlement Time',
        answer: 'Options specific term. The specific time of days options expire, and futures “settle” for the day. These values are used to calculate daily P&L and mark to market.'
    },
    {
        id: 21,
        question:'All-or-None ',
        answer: 'Options specific term. An order type that must be executed in its entirety, or not executed at all.'
    },
    {
        id: 22,
        question:'Immediate or Cancel (IOC)',
        answer: 'Options specific term. A type of order that requires all or part of the order to be executed immediately. Unfilled parts of order are cancelled– sometimes referred to as Fill and Kill (FAK) orders.'
    },
    {
        id: 23,
        question:'Good for Day (GFD) order',
        answer: 'Options specific term. A type of order that will remain active until executed (in part or full) or until the end of the trading day. It is then cancelled.'
    },
    {
        id: 24,
        question:'Good-till-cancelled (GTC)',
        answer: 'Options specific term. A type of order that will remain active until completed or cancelled by the entering party.'
    },
    {
        id: 25,
        question:'Fill or Kill (FOK)',
        answer: 'Options specific term. An order type that must be executed immediately in its entirety, otherwise the order is cancelled; often with floor trading – market makers have a few seconds to decide to make a trade and can also do a partial order. Sometimes brokers will use this interchangeably with Fill and Kill and will fill partial FOK orders.'
    },
    {
        id: 26,
        question:'OCO (one cancels the other)',
        answer: 'Options specific term. When one order is executed, the other order is automatically cancelled. This is usually invoked to protect someone from gaining too much exposure in one direction.'
    },
    {
        id: 27,
        question: 'Contract Size',
        answer: 'Options specific term. The multiplier attached to an option or future. Options on stock generally have a multiplier of 100 shares. Options on futures have a multiplier of 1 future. The multiplier on options on a future and the multiplier on the future can vary.'
    },
    {
        id: 28,
        question: 'Vol bid, catching a bid, ripping/exploding',
        answer: 'Options specific term. Variety of terms for vol going up.'
    },
    {
        id: 29,
        question: 'Vol offered, vol smashed/smoked',
        answer: 'Options specific term. Variety of terms for vol going down.'
    },
    {
        id: 30,
        question: 'Teenie',
        answer: 'Options specific term. Lowest priced options. Generally traded for movement risk purposes.'
    },
    {
        id: 31,
        question: 'Theoretical Value (Theo)',
        answer: 'Options specific term. Based on all inputs, the current value a market maker believes an option is worth.'
    },
    {
        id: 32,
        question: 'Sheets (or fair value)',
        answer: 'Options specific term. same as Theo but generally when referring to where something traded.'
    },
    {
        id: 33,
        question: 'Liquidity',
        answer: 'Options specific term. How easy/hard it is to trade close to fair value. Generally determined by the number on contracts on the bid/offer, along with the width of the market.'
    }         
]


export default Data

