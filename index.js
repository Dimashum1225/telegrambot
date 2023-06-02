const { Telegraf, Markup } = require('telegraf');
const bot =new Telegraf('6118338229:AAGfvzPgtDW1sTMnKQq23m3FScCgKMurBYM');


const compliments =[
   'Ты восхитительный человек!',
   'Твой взгляд как солнечный лучик!',
   'Ты очень талантлив и креативен!',
   'Ты всегда умеешь поднять настроение!',
   'Ты прекрасный друг и заботливый человек!',
 ];
let currentCompliment = compliments [0];
function getDayOfWeek() {
    // Получаем текущую дату
    var date = new Date();
    
    // Получаем номер дня недели (0 - воскресенье, 1 - понедельник, и т.д.)
    var dayOfWeek = date.getDay();
    
    // Создаем массив с названиями дней недели
    var daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    
    // Возвращаем название текущего дня недели
    return daysOfWeek[dayOfWeek];
  
  }
  var currentDayOfWeek = getDayOfWeek();


  
const keyboard= Markup.keyboard([
    ['День недели'],
  ['Сказать комплимент'],
  
   ['Поменять комплимент']
]).resize().oneTime ();

bot.start((ctx) => {
  ctx.reply( 'Привет! я бот-комплиментатор. Вот мои команды:', keyboard)
});
bot.hears('День недели',(ctx)=>{
    ctx.reply('сегодня '+ currentDayOfWeek,keyboard);
 
})
bot.hears ('Сказать комплимент', (ctx) => {
  
    ctx.reply(currentCompliment, keyboard);
  
 });
 bot. hears('Поменять комплимент', (ctx) =>{
  const randomIndex = Math.floor (Math.random()*compliments.length);
  currentCompliment = compliments [randomIndex];
  ctx.reply( 'Новый комплимент выбран!', keyboard);
 });
bot.launch();
             
