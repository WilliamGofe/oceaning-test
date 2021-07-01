import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Router from '../src/route/Router'

export const Dviqualquer = styled.div `
width: 100vw;
height: 100vh;
background-image: url('https://s3-alpha-sig.figma.com/img/ee3f/38c0/e593d93da0b306e57e11a512ec9e2885?Expires=1625443200&Signature=SphnIVKAoTavV4VhUS9~quW20vkELT8eQ9jDSpKeJsn9tS4bN3GhbOIxE5PqagHmioF3i0NgXaaal~xsed39jDtrwGlWXAgLZFa1RRjdRIydL0EttNbBO6iyE0w8jgEXzQAW8dawxfK6p2Bij1LxCDT89TPxiZJZW0bw5fojZ9qjZOCrZndgcJjVXHSzjUSvY-Ffvi1iMBH6WJBU7RgPUmIyNQAVa5iDmR9fm2~nLTuVqWsw2~khkZMKWGNlJ02gGpACgCNsh4EcWY1Fto1RuKcytyJYPSdiwkOAyB0TQBEu2dCZlog~UH3-98L9cD4pUgKjM2GxsR0HImGRjI8x6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');

`

export const DviSkills = styled.div`
background-image: url('https://s3-alpha-sig.figma.com/img/ee3f/38c0/e593d93da0b306e57e11a512ec9e2885?Expires=1625443200&Signature=SphnIVKAoTavV4VhUS9~quW20vkELT8eQ9jDSpKeJsn9tS4bN3GhbOIxE5PqagHmioF3i0NgXaaal~xsed39jDtrwGlWXAgLZFa1RRjdRIydL0EttNbBO6iyE0w8jgEXzQAW8dawxfK6p2Bij1LxCDT89TPxiZJZW0bw5fojZ9qjZOCrZndgcJjVXHSzjUSvY-Ffvi1iMBH6WJBU7RgPUmIyNQAVa5iDmR9fm2~nLTuVqWsw2~khkZMKWGNlJ02gGpACgCNsh4EcWY1Fto1RuKcytyJYPSdiwkOAyB0TQBEu2dCZlog~UH3-98L9cD4pUgKjM2GxsR0HImGRjI8x6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
width: 100vw;

`

function App() {
  return (
<DviSkills>
 <Router/> 
</DviSkills>

   
  );
}

export default App;
