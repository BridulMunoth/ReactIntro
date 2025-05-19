import { countryList } from "./CurrencyCode";
import { useEffect, useState } from "react";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";

function App() {
  const [amt, setAmt] = useState(10);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [convertedAmt, setConvertedAmt] = useState(0);
  const [btnDisable,setBtnDisable] = useState(false)

  // const currencyInfo = useCurrencyInfo(from, to);
  const { rates } = useCurrencyInfo(from, to);
  const options = Object.keys(countryList);

  // useEffect(()=>{
  //   if(currencyInfo==='Failed to fetch') setBtnDisable(true)
  //       else setBtnDisable(false)
  // },[amt, from, to, currencyInfo])

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmt(amt);
    setAmt(convertedAmt);
  };

  // currency exchange rate multiplier
  // const ConvertAmt = () => {
  //   if (amt === "" || amt < 1) {
  //     setAmt(1);
  //   }
  //   setConvertedAmt(amt * currencyInfo.rates[to]);
  // };

const ConvertAmt = () => {
    if (amt === "" || amt < 1) {
        setAmt(1);
        return;
    }

    if (rates && rates[to]) {
        setConvertedAmt(amt * rates[to]);
    } else {
        setConvertedAmt(0);
    }
};


  useEffect(() => {
    ConvertAmt();
  }, [amt, from, to, rates]);

  useEffect(() => {
    if (!rates || !rates[to]) {
        setBtnDisable(true);
    } else {
        setBtnDisable(false);
    }
}, [rates, to]);


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              ConvertAmt();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amt={amt}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amt) => setAmt(amt)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amt={convertedAmt}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
                onAmountChange={(amt) => setAmt(amt)}
              />  
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg "
              disabled={btnDisable}  
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()} {btnDisable}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
