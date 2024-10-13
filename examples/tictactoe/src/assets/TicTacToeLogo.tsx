import React from 'react';

interface TicTacToeLogoProps {
    width?: string;
    height?: string;
}

const TicTacToeLogo: React.FC<TicTacToeLogoProps> = ({ width = '18', height = '18' }) => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 18 18" fill="none">
        <path d="M14.5181 6.85438C16.3805 6.85438 17.8897 5.34511 17.8897 3.48273C17.8897 1.62036 16.3805 0.111084 14.5181 0.111084C12.6557 0.111084 11.1465 1.62036 11.1465 3.48273C11.1465 5.34511 12.6557 6.85438 14.5181 6.85438ZM14.5181 1.95016C15.3635 1.95016 16.0507 2.63737 16.0507 3.48273C16.0507 4.3281 15.3635 5.0153 14.5181 5.0153C13.6727 5.0153 12.9856 4.3281 12.9856 3.48273C12.9856 2.63737 13.6727 1.95016 14.5181 1.95016Z" fill="black"/>
        <path d="M3.48295 11.1455C1.62059 11.1455 0.111328 12.6548 0.111328 14.5172C0.111328 16.3795 1.62059 17.8888 3.48295 17.8888C5.34531 17.8888 6.85457 16.3795 6.85457 14.5172C6.85457 12.6548 5.34531 11.1455 3.48295 11.1455ZM3.48295 16.0497C2.63759 16.0497 1.95039 15.3625 1.95039 14.5172C1.95039 13.6718 2.63759 12.9846 3.48295 12.9846C4.32831 12.9846 5.01551 13.6718 5.01551 14.5172C5.01551 15.3625 4.32831 16.0497 3.48295 16.0497Z" fill="black"/>
        <path d="M9.91968 0.111084H8.08062V8.08043H0.111328V9.91951H8.08062V17.8889H9.91968V9.91951H17.889V8.08043H9.91968V0.111084Z" fill="black"/>
        <path d="M1.74944 6.51659L3.48307 4.78295L5.21669 6.51659L6.51691 5.21636L4.78329 3.48272L6.51691 1.74908L5.21669 0.448853L3.48307 2.18249L1.74944 0.448853L0.449219 1.74908L2.18285 3.48272L0.449219 5.21636L1.74944 6.51659Z" fill="black"/>
        <path d="M16.2518 11.4834L14.5182 13.217L12.7846 11.4834L11.4844 12.7836L13.218 14.5173L11.4844 16.2509L12.7846 17.5511L14.5182 15.8175L16.2518 17.5511L17.5521 16.2509L15.8184 14.5173L17.5521 12.7836L16.2518 11.4834Z" fill="black"/>
      </svg>
    </div>
  )
}

export default TicTacToeLogo;