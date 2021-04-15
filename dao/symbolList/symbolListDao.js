const symbolList = [
    {
        "symbol": "AAL",
        "name": "American Airlines Group Inc.",
        "currency": "USD",
        "stockExchange": "Nasdaq Gloabl Select",
        "exchangeShortName": "NASDAQ"
    },
    {
        "symbol": "CAN",
        "name": "Canaan Inc.",
        "currency": "USD",
        "stockExchange": "Nasdaq Gloabl Select",
        "exchangeShortName": "NASDAQ"
    },
    {
        "symbol": "PAA",
        "name": "Plains All American Pipeline, L.P.",
        "currency": "USD",
        "stockExchange": "Nasdaq Gloabl Select",
        "exchangeShortName": "NASDAQ"
    },
    {
        "symbol": "AAWW",
        "name": "Atlas Air Worldwide Holdings, Inc.",
        "currency": "USD",
        "stockExchange": "Nasdaq Gloabl Select",
        "exchangeShortName": "NASDAQ"
    },
    {
        "symbol": "AAME",
        "name": "Atlantic American Corporation",
        "currency": "USD",
        "stockExchange": "Nasdaq Gloabl Select",
        "exchangeShortName": "NASDAQ"
    },
    {
        "symbol": "PRAA",
        "name": "PRA Group, Inc.",
        "currency": "USD",
        "stockExchange": "Nasdaq Gloabl Select",
        "exchangeShortName": "NASDAQ"
    },
    {
        "symbol": "MAAC",
        "name": "Montes Archimedes Acquisition Corp.",
        "currency": "USD",
        "stockExchange": "Nasdaq Gloabl Select",
        "exchangeShortName": "NASDAQ"
    },
    {
        "symbol": "MPAA",
        "name": "Motorcar Parts of America, Inc.",
        "currency": "USD",
        "stockExchange": "Nasdaq Gloabl Select",
        "exchangeShortName": "NASDAQ"
    },
    {
        "symbol": "LHAA",
        "name": "Lerer Hippeau Acquisition Corp.",
        "currency": "USD",
        "stockExchange": "Nasdaq Gloabl Select",
        "exchangeShortName": "NASDAQ"
    },
    {
        "symbol": "RAAC",
        "name": "Revolution Acceleration Acquisition Corp",
        "currency": "USD",
        "stockExchange": "Nasdaq Gloabl Select",
        "exchangeShortName": "NASDAQ"
    }
]

const symbolListDao = {
    getAllSymbolList: () => {
        return symbolList
    },

    getSymbolListBySymbolName: symbolName => {
        return symbolList.find(e => {
            return e.symbol = symbolName;
        })
    }
}

module.exports = symbolListDao