import React, { useState } from "react";
import Card from "./Card";
import "./Card.css";
import Navbar from "./Components/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Bottombar from "./Components/Games/navbar/bottombar.jsx";
import { Helmet } from "react-helmet";

function Home() {
  const GameData = [
    {
      url: require("./images/barbie-dreamtopia-sparkle-mountain-royal-ride.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/eace3ee69abac57c39178451800db9d5~c5_100x100.jpeg?x-expires=1688479200&x-signature=wAkVmwL7lej15%2B16ypSWQOqTP8s%3D",
      username: "dailydotdev",
      description: `Dreamtopia is a magic land where fairies, mermaids, witches, and all kinds of creatures live together peacefully. But what threatens this atmosphere is the loss of the Elephant King's crown. Play the Sparkle Mountain Royal Ride game to solve this problem quickly!
        The ruler asked Barbie and Chelsea to give him a hand, as their magical powers are the strongest. You should guide everyone through a rough journey and collect as many gems as possible. Are you in for a ride?
        
        How to Play
        The Elephant King will carry you on his back into a magical experience. Your task is to search the Sparkle Mountain and collect gems. The only controller you need is the Up arrow key, which allows you to jump and avoid obstacles. And there is no need to jump for diamonds, as the king attracts them instantly.
        
        The game has no definite ending; it just keeps testing your attention span and reaction speed. Thus, the first level will train you for 500 meters. This distance will grow gradually, with 100 meters per round. For each level, you have three lives, which can't be regenerated until the run is over.
        
        A special power you should consider is the Rainbow bar. You can charge it by collecting the colorful stars, and when it's full, it will give you a speed boost.
        
        Useful Tips
        Watch out for possible hazards, though. The red, spiky crystals will take one life from you. But if you see any warning signs beforehand, remember you will have to jump soon. Another thing that can cause harm is landing too hard on the ground, so be mindful of your steps.
        
        When it comes to your final score, the regular gems bring you 50 points, while the stars are worth 100 marks. And another tip – if you see big, round planets, jump. Trust me. It will take you to the right path.
        
        Become the savior of Dreamtopia and help the Chelsea and Barbie restore the Elephant King's precious crown!`,
      song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
      htmlUrl: "../21-games/barbie-sparkle-mountain-ride/index.html",
      likes: "13.4K",
      comments: 3121,
      saves: 254,
      shares: 420,
      id: 1,
    },
    {
      url: require("./images/barbie-make-up.jpg"),
      profilePic:
        "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4e6698b235eadcd5d989a665704daf68~c5_100x100.jpeg?x-expires=1688479200&x-signature=wkwHDKfNuIDqIVHNm29%2FRf40R3w%3D",
      username: "wojciechtrefon",
      description: `Use your imagination and exercise your make-up skills with Barbie: MakeOver Studio game! Now you can bring your craziest cosmetics designs to life!`,
      song: "help so many people are using my sound - Ezra",
      htmlUrl: "../21-games/barbie-make-up/index.html",
      likes: 5438,
      comments: 238,
      saves: 12,
      shares: 117,
      id: 2,
    },
    {
      url: require("./images/barbie-spy-squad-academy.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: `Starting the Game
        Select the play button on the lower right corner of the welcome screen to begin the game.
        To the right of the play button is the smaller sound button. Select to turn the game’s audio on and off.
        Your browser automatically sotres your game progress and achievements.
        Game Controls
        Desktop
        The game utilizes the arrow keys and space bar for general movement.
        Right click on the buttons on the lower right corner for specific moves.
        All the instructions for the minigames below assume desktop controls.
        Touchscreen devices
        While the game may be playable on touchscreen devices, its controls are optimized for desktop play with a keyboard.
        Tap and swipe to move. Use the buttons on the right to perform specific actions.
        General
        Mission screen
        Select the mission minigames you want to play from the three screens.
        Click on the pink x button on the top left corner to return to the welcome screen.
        Toggle the game’s audio using the green sound button on the upper right corner of the screen.
        View your achievements via the button on the lower right corner of the screen.
        After selecting, choose between Barbie, Renee, and Teresa to play as.
        In all three games, you have a health bar representing the number of lives you have.
        Each life is represented by a heart on top of the screen.
        Lose all your lives, and it’s game over.
        The game will play a brief tutorial slideshow before the start of the game.
        The tutorial only plays once, so pay attention.
        Motorcycle Race
        Controls
        Use the up and down arrow keys to move between lanes.
        Use the space bar to jump.
        Mission objective
        Collect as many scattered gems on a specific stretch of road.
        There is no completion bonus; you don’t need to collect all the gems on the road.
        You do get an achievement to
        Avoid hitting oil barrels and enemy robots.
        Lives
        You can only get hit three times before it’s game over.
        You refill your health bar as you collect gems.
        Dodging obstacles
        The game has 2 obstacles: enemy robots and oil barrels
        Enemy robots occupy one lane, though they may come in groups of up to three.
        Oil barrels can block two lanes at a time.
        Hitting any obstacle will cause you to lose a life.
        The best way to avoid the obstacles is to jump over them.
        If you have enough room to dodge, you can also switch lanes to avoid them.
        Laser Sneaking
        Controls
        Move using the left and right arrow keys.
        Use the up and down arrow keys to climb.
        Use the space bar to do a roll.
        Mission objective
        Collect the stolen gem at the end of the level.
        Dodge the enemy robots guarding the gem.
        Navigate past the laser traps.
        Avoid the laser traps.
        Wait until the laser traps turn off to move past them.
        Move before they turn back on.
        Avoiding the robots
        You can roll under the robots to escape them.
        You can use both the space bar and the roll button to roll.
        The roll button is one of two buttons in the lower right corner of the screen. It is the one at the bottom
        Turning on the cloaking device will make you undetectable to the robots.
        The cloaking device button is on top of the roll button on the lower right corner of the screen.
        Move fast, as the cloaking device only works for a short while.
        The cloaking device has a cooldown of a few seconds before you can use it again.
        Alternatively, you can stand just outside the robot’s range. They won’t chase after you.
        Lives
        You only have three lives to get through the game.
        You lose a life each time a robot finds you or you hit a laser wire.
        Lose all your lives and it’s game over.
        Code Breaker
        Objective
        Create a path for the Percy the robot puppy to pass through.
        Make sure the path is complete when he passes through it.
        Aligning the paths
        The path formed must connect the green and blue points.
        To form the path, rotate the pieces a number of times until it locks into place.
        When a component locks into place, it changes color.
        Once the component is locked, you cannot change its position.
        The way the components lock up is a hint. Base your next move on where the paths would link up.
        You don’t need to use all the components to form a path.
        Percy’s path
        The path doesn’t need to be complete for Percy to pass through it, but Percy must pass through an intact component of the path.
        If Percy passes by an incomplete path, you lose a life.
        You only have three tries before it’s game over.
        Don’t be too worried, though; Percy doesn’t move for a while. And when he does, he moves slowly.
        Once you complete the path, Percy will walk down it much faster.
        Looking for more?
        If you want to play a similar game with more difficulty and variety, try out Pipe Mania.
        Achievements
        The game has several unlockable achievements for accomplishing something in-game. They are as follows:
        General
        Certified Spy: complete all 3 missions.
        Spy Squad: play as all 3 characters.
        Ultimate Spy Squad: play as 3 missions with all 3 characters.
        Motorcycle Race
        License to Spy: complete this minigame.
        Gem Collector: collect at least 10 gems
        Super Gem Collector: collect at least 15 gems
        Mega Gem Collector: collect at least 20 gems
        Perfect Run: complete the minigame without ever hitting a robot
        Down to the Wire: complete the minigame with only 1 life left.
        Plenty to Spare: complete the minigame with all 3 lives.
        Code Breaker
        Code Breaker: complete this minigame for the first time
        Natural Code Breaker: complete the minigame without losing a life
        Practice Makes Perfect: play the minigame 5 times
        Laser Sneaking
        Undetected: complete this minigame
        Elite Gymnast: complete this minigame without losing any lives
        When you unlock an achievement, its name pops up on the game screen.
        Note to parents:
        On occasion, this game comes with in-game features linking to the store at the official Barbie website.
        Target Audience
        This collection of minigames is suited for children of all ages and of fans of the Barbie Spy Squad animated movie.
        None of the minigames have any adult content.`,
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/barbie_spy/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 3,
    },
    {
      url: require("./images/be-cool-scooby-doo-sandwich-tower.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description:
        "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/be-cool-scooby-doo-no-guts-no-treats/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 4,
    },
    {
      url: require("./images/ben-10-cannonbolt-smash.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description:
        "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/be-cool-scooby-doo-no-guts-no-treats/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 5,
    },
    {
      url: require("./images/ben-10-tomb-of-doom.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: `Starting the Game
        On the welcome screen, select the play button below the game’s title to begin.
        Toggle the game’s audio via the sound button on the upper right corner of the screen.
        Your browser automatically saves your level progress.
        Game Controls
        Desktop
        Left click and drag around the screen to navigate.
        Left click on the cannon, drag, and hold to aim.
        To fire Stinkfly, release the click.
        Touchscreen devices
        Use your fingers like a mouse.
        Game Play
        Basics
        Shoot Stinkfly out of a cannon.
        Click on the cannon to activate it.
        You only have a limited number of shots in each level, usually 3 or 4, so make it count.
        Collect as much money as you can.
        Stacks are worth $100
        Bags are worth $300
        Meet the level’s dollar quota to clear it.
        Enemies, obstacles, and level features.
        Some levels will pit you against enemies like Queen Bee’s henchmen. Dodge them to maximize your collection.
        You can time your shots so that Stinkfly goes past them.
        The level sometimes has obstacles that will keep you from reaching key areas with a lot of money.
        Use a power up to destroy them.
        Alternatively, aim to bounce off of them to collect more money on that side
        Power ups
        Power ups become available after reaching a few levels.
        You must pay some money to use them.
        There are up to 4 power ups in the game.
        The first use of the power up is free.
        Strategy
        In this game, you can stroll around the target area before firing.
        Survey the layout of the level before firing.
        Choose an angle that will let you collect the most money.
        Use the layout of the level to your advantage.
        Aim for places you can bounce off to maximize your collection on the first shot.
        Plan your way around obstacles.
        Sometimes, it’s better to avoid them altogether.
        Other times, you can take them out using a power up.
        Target Audience
        This game is suited for children of all ages and fans of the Ben 10 reboot.
        The game has no adult content.`,
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/ben-10-tomb-of-doom/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 6,
    },
    {
      url: require("./images/chhota-bheem-and-jewel-quest.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: `Starting the Game
        On the welcome screen, select the play button to begin.
        Select the speaker button on the top right corner to turn the game’s sounds on or off.
        Select the story button on the bottom left corner to learn more about the game’s lore.
        Select the help button to open the game’s tutorial screen.
        Your web browser automatically saves you game progress and high scores.
        Game Controls
        Desktop
        With your mouse, left click to select and move crystals.
        Touchscreen devices
        Tap on the crystals with your fingers to select and move them.
        Game Play
        Level selection
        Levels are unlocked in sequence.
        You start the game with only one of the levels unlocked.
        Finish one level to unlock the next.
        There are 30 levels in this game.
        You can replay any of the levels you’ve already unlocked.
        Basic rules
        Earn points by matching and removing groups of 3 or more identical crystals.
        Select any crystal and drag it to the spot the crystal adjacent to it.
        You can move the crystals horizontally or vertically.
        When you form a valid row of the same crystals, the game removes them.
        The game instantly replaces the crystals you remove.
        These appear on the topmost row and bring down the remaining crystals.
        You can sometimes create new valid rows in one move.
        If you’re ever stuck, the game will provide you with a hint by shaking some of the crystals you can match.
        Meet each level’s point quota within a limited number of moves.
        Focus on moves that clear several crystals at once.
        Plan your moves with care; make one mistake and you may fail the level.
        Power ups
        Clearing more than 3 crystals at once gives you powerups.
        Each power up has its own benefits:
        Horizontal power ups clear entire rows or columns of crystals. You receive these when you clear 4 crystals in a row.
        Potions clear all the crystals of that color from the field. You receive them after clearing 5 in a row.
        To activate the power ups, add them to a line of 2 or more.
        Powerups can help you achieve your score goals faster. They become especially important in the later levels.
        Scoring
        Each crystal you remove is worth 25 points. You can collect between 75 to 125 points with each row you remove.
        You also get a combo bonus each time you remove several rows in a single move.
        You have both a level score and a total score.
        Your total score consists of all the points you earned in that level.
        Replaying a level also adds to your total score.
        Target Audience
        The game is suited for players who like match 3 in a row games.
        The game has no adult themed content.`,
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/ChhotaBheemJewelQuest/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 7,
    },
    {
      url: require("./images/chhota-bheem-and-sports-car.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: `Starting the Game
        On the welcome screen, select Start Race to begin.
        Select Instructions to open the tutorial screen.
        Select the music button to turn the game’s music on or off.
        Game Controls
        Desktop
        With your keyboard:
        Use the space bar to jump.
        Use the left and right arrow keys to do back and front flips, respectively.
        Touchscreen devices
        With your fingers:
        Tap on the jump button to jump.
        Tap on the front and back flip buttons to do flips.
        Controls and indicators
        Top left corner (top down):
        Damage meter
        Music button
        Top right corner (top down):
        Score
        Pause button
        Bottom row (left to right):
        Jump button
        Back flip button
        Front flip button
        Game Play
        Choose a character
        Chhota Bheem
        Raju
        Basic rules
        Your car automatically moves forward.
        Jump over obstacles to avoid them.
        If you hit an obstacle, you will damage your car.
        If your car gets too damaged, the
        Do front and back flips for extra points.
        Scoring
        Earn points by collecting bonuses:
        Blue squares get you 100 points.
        Red gems get you 200 points.
        Gold coins get you 500 points.
        Each time you successfully do a flip, you receive 1,000 points.
        Target Audience
        The game is suited for players who like the Chhota Bheem animated series or simple car driving games.
        The game has no adult themed content.`,
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/ChhotaBheemSportsCar/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 8,
    },
    {
      url: require("./images/coffee-shop.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: `Starting the Game
        Click the Play button on the game’s welcome screen.
        On the first day it will run you through a tutorial on the goal of the game (making profits in 14 days), buying inventory, setting your recipe, and pricing.
        Your web browser automatically stores your high score.
        Game Controls
        Desktop
        The game’s layout in prep mode changes based on which side of the screen your mouse is on.
        If you scroll over recipe it will enable you to change your recipe. Click on the slider and drag it to adjust the amount used of any ingredient.
        If you scroll over ingredients that will enable you to buy ingredients. Click on the quantity you want to buy for each cups, coffee, milk and sugar.
        Your potential serving quantity and the limiting factor is shown in the lower left corner. As you buy ingredients or adjust your recipe it will change what your limiting factor of production is.
        Your remaining budget is shown in the upper left corner.
        If you make a purchase by mistake there is an Undo Purchase button in the lower left corner.
        You can also set your pricing near the bottom of the screen. As a general rule of thumb around $1.40 per cup is ok if it is cool to warm and you can go to $2 or more if it is freezing.
        Once the day begins you can see how customers respond and how your sales are pacing to determine if it makes sense to move the cup price slider in the upper left corner.
        Touchscreen
        Use your finger like a mouse.
        Stat displays
        Current savings is shown in the upper left corner.
        Day, time and weather are shown in the upper right corner.
        Reputation is shown in the lower left corner.
        Your remaining supplies are shown in the lower right corner.
        Gameplay Strategy
        Time
        The game lasts a total of 14 days.
        The money you earn from one day (as well as any remaining savings you have going into that day) is your budget starting the next day. You are not required to spend all your budget and can save as much of it as you like.
        The day starts at 7 am.
        If you do not have robust sales by 11 am it probably makes sense to lower prices.
        The day ends at 7 pm, though few customers come by after 5. At the end of the day it tells you tomorrow’s weather forecast.
        Daily approach
        At the end of each day it gives you a forecast for tomorrow’s weather.
        On cold days people are willing to pay more for a hot cup of joe, so if it is freezing you can charge them more.
        This in turn, also means it makes sense to be more aggressive with buying perishable supplies in bulk on cold days & less aggressive on warm or hot days.
        Some of your ingredients like milk go bad daily while sugar or coffee often also go bad at the end of the day, so try not to carry much more than you think you will sell & lower your prices around 2 pm if you think you are going to have a lot of ingredients go bad.
        A mental model for how this game is designed is you are lucky to break even on days when it is hot out and can make large profits on days when it is freezing.
        You get zero credit for retained inventory on day 14 so try to buy the right amount of ingredients to last the day & put on a fire sale late in the day if it looks like you will have leftovers.
        Cost of Ingredients
        Each ingredient you purchase for your coffee has a purchase price which declines per unit as your purchase volume increases.
        Cups are available in packs of 10, 25 and 50 at a price of $2, $4, and $6.
        The unit cost drops from 20 cents to 16 cents to 12 cents as your purchase volume increases.
        The cost savings buying in bulk is 20% to 40% and they never go bad.
        Coffee is available in packs of 20, 40 or 60 tsp at a price of $10, $14, and $18.
        The unit cost drops from 50 cents a tablespoon to 35 cents and then 30 cents.
        The cost savings buying in bulk is 30% to 40%.
        Milk is available for purchase in 10, 20 or 40 cup volumes at a price of $1, $1.8 and $2.
        The unit cost drops from 10 cents to 9 cents to 5 cents.
        The cost savings buying in bulk is 10% to 50%.
        Given the relative pricing between 20 cups and 40 cups it almost always makes sense to buy 40 cups at a time & then adjust your recipe to make it a bit creamier if you would otherwise have milk left over at the end of the day.
        Sugar is available in packs of 10, 20 or 50 tsp at a price of $3, $5 and $8.
        The unit cost drops from 30 cents to 25 cents to 16 cents.
        Given the cost savings buying in bulk & that mice only rarely attack it is typically worth buying sugar in packs of 50 if you can afford to.
        Cup formula
        Each cup is a cup which can cost as little as 12 cents, but every other ingredient has a range you can adjust for how much is used. All cost information shown presumes ingredients were bought in bulk.
        Coffee: 1 to 4 tsp, which costs 30 cents to $1.20 per cup.
        Milk: 0.0 cups to 2 cups, which costs 0 to 10 cents per cup.
        Sugar: 0 to 4 tsp, which costs 0 to 64 cents per cup.
        Total cup cost
        Presuming you buy in bulk and make the most expensive cup possible it would cost you $2.08 per cup.
        If you had all ingredients in the middle it would cost $1.24 per cup.
        Given how cheap milk is I like to go full on the milk meter.
        I tend to adjust the sugar formula on a day to day basis to try to have it and the milk just about run out by the end of the day
        Given how expensive coffee is I tend to run that more toward the middle or low range.
        Perishable ingredients
        Your cups rarely if ever go bad, making it make sense to buy in bulk when you can afford to.
        Your milk goes bad about 100% of the time at the end of the day.
        At the end of the day 30% of your remaining coffee frequently goes stale. On some days 100% can go stale.
        Ants get in your sugar about once every third or fourth day. You can sometimes lose 70% of your sugar from ants.
        Customer feedback
        When customers walk by they leave feedback bubbles.
        A green border means good and red is bad.
        If around half or more are red that means you are giving away most of the market and should lower prices.
        If fewer than 1 in 6 are red that means you can likely raise prices.
        Customer thought bubbles also include a picture in their thought bubble: the sun, a dollar sign, coffee, milk, or sugar.
        Some customers also have a magnet in their thought bubble, indicating they will help attract other customers.
        You can (and should!) adjust your cup pricing on the fly repeatedly throughout the day.
        If you are running low on ingredients you can raise prices.
        If you look like you have a lot of left over ingredients which may spoil you can lower prices to sell at break even or a slight loss rather than having that spoilage.
        Realistic or not?
        This game does a good job teaching children about supply and demand curves, maintaining inventory, unit pricing, inventory spoilage & marketplace reputation.
        Three things that are perhaps less than ideal about the game are what a big impact the weather has, recipe variation encouragement, not considering inventory in daily stats & lack of fixed business costs.
        In real life we have ice and billions of dollars of iced coffees are sold every month, so weather has a much smaller impact on consumer demand than this game shows. However the variability of the weather helps teach kids about externalities and anticipating consumer demand shifts.
        Many large businesses maintain a fairly stable recipe or customize each order to the particular consumer’s preference. The variability in day to day recipes here does not teach the value of continuity and setting stable consumer expectations as well as one might hope, but there needs to be some variability for the player to feel in control of the game.
        Unless the first day is freezing you will likely lose money on it based on a straight profits and losses basis if you do not count the value of any inventory. By not counting the value of remaining inventory the game can make a decent first day sound bad even if a person nearly broke even on it while building inventory.
        Every business has fixed and marginal business costs. This simulation only focuses on marginal costs, which is a way of under-estimating the roll of fixed costs like rent or debt servicing. It also does not have a marketing budget feature, which is a primary cost center for many new small businesses.
        Target Audience
        This game is fun for fans of simple simulation games.
        Teachers can use this game to help teach consumers about demand curves and inventory.
        Coffee drinkers can use this game to get them ready for their coffee break.
        There are no adult themes in this game.`,
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/coffee-shop/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 9,
    },
    {
      url: require("./images/dora-jungle-match.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: `Starting the Game
        Select Play Now on the right side of the screen.
        The game will begin with a brief explanation of the rules.
        Game Controls
        Desktop
        Select the tile by left clicking on it.
        Left click on where you want to move it.
        Touchscreen devices
        Use your fingers like you would with a mouse.
        Game Play
        Match rows of three or more identical tiles to remove them from play.
        Rows can be horizontal or vertical.
        Some overlapping rows can be cruciform or L-shaped. Both resulting rows are valid.
        You can only move one tile at a time.
        You can only move a tile to where it can form a valid row.
        As you remove tiles, more tiles move in to take their place.
        Tiles below it will fall down.
        Sometimes, they will form full rows by themselves.
        This can work to your advantage. Remove the tiles strategically to cause a cascading chain reaction.
        The game ends after 60 seconds or if you run out of legal moves.
        Take a screenshot of the game to save and share your high score.
        Target Audience
        The game is a simple tile-matching game suited for children of all ages.
        It’s a great themed game for fans of the live-action Dora movie.
        This game has no adult content.`,
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/dora-jungle-match-build/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 10,
    },
    {
      url: require("./images/doras-wonderful-wardrobe.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: `Starting the Game
        Select the button on the lower right corner of the welcome screen to start the game.
        View your previous looks by selecting the album button to the left of the play button.
        Your browser automatically saves your previous work.
        Game Controls
        Desktop
        Left click to navigate through the clothing choices.
        Left click and hold to select an outfit.
        Drag and drop the outfit to make Dora wear it.
        Touchscreen devices
        Use your fingers as a mouse.
        Game Play
        Clothing selection
        To the left are three different clothing categories:
        Tops (19 options)
        Bottoms (17 options)
        Footwear (19 options)
        To the right of the screen are three buttons:
        The home button takes you back to the welcome page.
        The undo button clears your last action.
        The sound button turns the game audio on and off.
        The check button saves your work and moves you to the background selection screen.
        Background selection
        Choose between three backgrounds:
        City streets
        Building façade
        Boardwalk
        You cannot see the scene in full. You must go to camera mode to do that.
        Go to camera mode by selecting the green check button on the lower right corner of the screen.
        Select the red back button on the upper left corner to move back to the clothing selection screen.
        Camera mode
        Camera mode shows the entire scene in full.
        Select the camera button on the lower right corner to save the look.
        After saving the image, you automatically return to the welcome screen.
        Album
        Select the saved picture to view it in full.
        To go back to the album, select the red return button on the upper right corner.
        Select the red home button on the lower right corner to go back to the welcome screen.
        To save your work on your device, take a screen shot.
        On a desktop, press Print Screen on your keyboard.
        Crop and save your image on an editing program like MS paint.
        Target Audience
        This dress-up game is suited for young children.
        There isn’t a lot of variety, so it may not be as engaging to older children.
        This game has no adult content.`,
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/doras-wonderful-wardrobe/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 11,
    },

    {
      url: require("./images/garfield-coloring-book.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: `Starting the Game
        Click or tap the purple start button to begin.
        Click on the speaker icon to toggle the game’s audio.
        Choose one of 40 cartoons featuring Garfield and other characters from the comic. Comics are organized four-per-page with scrollable arrows at the bottom of the scene selection menu.
        Game Controls
        Desktop
        Use the mouse to select pages and tools. Left click on whatever you want to use.
        Mobile
        Use your fingers as a mouse.
        Game Play
        Select a cartoon from the selection area.
        Each page contains 4 different colorable cartoons. You have a grand total of 40 cartoons to work with.
        The cartoons feature Garfield, Pooky the Teddy Bear, Odie, Arlene, and Nermal.
        You must use the arrow keys on either side to navigate through the pages.
        Once you’ve chosen a page, the game goes into coloring mode.
        Choose between 5 different tools:
        Eraser tool – erases in a circle pattern
        Paint bucket tool
        If you want a clean, comics-accurate appearance, the bucket tool is the best option.
        Using the paint bucket with white is faster than using the eraser.
        Small brush
        Medium brush
        Big brush
        You have a palette of 15 different colors.
        Many these colors match those used in the comic.
        Click on a color and a tool to apply the color into the line art.
        Once you’re done, click on the camera icon on the upper right corner to save your work.
        This will save the finished page as a .png file.
        The resulting work will be off center.
        Open the file in a new tab and save it to your computer.
        Click on the back button to return to coloring mode or to the selection area.
        Target Audience
        This coloring game is suited for younger children and fans of the Garfield franchise of all ages.
        This has no adult content.`,
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/garfieldcoloringbook/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 12,
    },
    {
      url: require("./images/garfield-sentences.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: `Starting the Game
        Begin by clicking on the purple play button at the center of the screen.
        Choose between two main modes and practice.
        The game automatically saves your progress in your browser.
        Game Controls
        Desktop
        Use your mouse left click button to select options.
        Mobile
        Tap on the answers as you would with a mouse (or, in typing mode, keyboard).
        Game Play
        Unscramble the word tiles to form a complete sentence.
        You need only to re-arrange word tiles.
        There’s no need to end words with periods.
        Sometimes, the game can only read a specific arrangement as valid, even one alternative is grammatically correct.
        e.g. the question “He ate apples and oranges.” will only be parsed as that by the game, even if “He ate oranges and apples.” is also valid.
        Pick between practice mode and two scored modes based on the input method.
        The scored modes are called tiles and typed and have six levels of difficulty.
        Each difficulty level contains 20 questions.
        Higher levels have longer, more complex sentences.
        Practice mode employs the same rules as tiles mode.
        Both involve clicking or tapping words enclosed in tiles.
        Practice has no stakes and score.
        Tiles mode is the easier of the two modes for desktop users.
        Typed mode is geared for mobile users who do not have PC.
        Click or tap onto the on-screen keyboard to type out the sentence.
        Be sure to click on shift at the appropriate times to ensure proper capitalization.
        You must use the on-screen keyboard rather than using a physical keyboard.
        Scoring
        In both scored modes, you earn 500 points for each question answered correctly.
        Each error you make decreases your score by 200 points. The more mistakes you make, the lower your score.
        You can score in the negative if you make enough errors.
        Errors do not impact your star rating. You earn three stars for answering the question correctly.
        Each star earned unlocks a constellation in the win screen.
        Clicking on the star icon on the upper right corner of the welcome screen will showcase all the constellations you’ve unlocked so far in either scored modes.
        Those you haven’t unlocked will not show the full image and have incomplete star-shaped holes in their outlines.
        Target Audience
        This is a game suited for younger children.
        It is a simple, child-friendly way to teach young learners the basics of sentence construction.
        There are no adult themes in this game.`,
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/garfieldsentences/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 13,
    },

    {
      url: require("./images/henry-danger-are-you-dangerously-smart.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: `Take part in your favorite cartoon in the Henry Danger: Cartoon Creator game! If Henry Danger is one of your favorite shows, you shouldn't miss out on this mission! You have the chance to create your own character based on the program. Are you creative enough for this task?
    
        You can use a wide variety of options to your advantage! Begin by choosing a body, then customize your hair by sorting through all the categories! You can choose a hairstyle, an outfit, customize the face and even pick a name! If you're feeling adventurous, you can even use the randomize button and see what happens! 
        
        How to Play
        You should start off by looking through all the categories and choosing your favorite parts! Use your mouse and Left-click on each menu, go through the pages, and see which items are interesting to you! Seems easy enough, right?
        
        In the beginning, you can choose a body type, a gender, and even a skin tone for your character. After that, you can continue to customize the face, hair, outfit, and accessories! You should aim to create a hero that fits in with the rest of your Henry Danger friends! Even so, you can let your imagination run free and be as wacky as you want!
        
        Show off your designer skills by creating the perfect character! If you have more than one idea, don't worry because you have multiple slots. Keep making as many heroes as you want, and try all your favorite combinations!
        
        What else you should know
        After you have created your character, you will be able to make a short comic strip with him. Choose whether you want one, four, or even eight panels and begin working on your story!
        
        For each panel, you can pick from various backgrounds, characters, and even speech bubbles and text to truly make your own creation! Add Henry, Charlotte, Jasper, or even some villains! You should test your imagination and make your story as crazy as you want!
        
        Do you have what it takes to create your own character? Begin making the perfect friend for the heroes now!`,
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/henry-danger-cartoon-creator/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 14,
    },
    {
      url: require("./images/maths-true-or-false.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: `Play this new and fun math game for free without downloading or installing any apps. Train your brain now!`,
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/maths-true-false/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 15,
    },
    {
      url: require("./images/mini-drifts.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: `Simply drive around and around on the track, drifting through each of the corners. The longer you drift the more points you will rack up. Avoid driving into any of the walls, just stay on the road! Earn enough points to level up, which means your car will go faster and will be harder to control.
    
        How to play: Touch and hold to drift car, avoid the walls`,
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/mini-drifters/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 16,
    },
    {
      url: require("./images/mini-golf-game-screenshot.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: `Mini Golf Club is a realistic 3D mini golf simulator with fun gameplay and hundreds of challenging levels.`,
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/mini-golf/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 17,
    },
    {
      url: require("./images/new-looney-tunes-snap.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: `Take a relaxing break with the Looney Tunes Recess game! If you feel stressed, you can wind down in the company of some of the funniest cartoon characters you have ever met. Elmer Fudd, Bugs Bunny, Tweety, and other quirky characters wait for you in the schoolyard. Join them for a session of fun games that are bound to put a smile on your face!
    
        Which one of the five attractions appeals to you most? All of them are easy to play, requiring just a few clicks. Besides, they only take 45 seconds each. Make sure you try them all! They are very addictive, so you'll want to gain a 3-star score for all of them. Are you ready to get started?
        
        How to Play
        Let's start by joining the world's most famous yellow bird! Do you know how to skip rope? Help Tweety win this challenge using your reflexes! All you need to do is click at the exact moment when the rope swings in front of her. It sounds quite simple, but it will be hard to earn a high score. There is a score penalty for every mistake, so try your best to keep up the rhythm!
        
        Are you ready for some dodgeball? Elmer is going to be a challenging opponent, as he is very swift. Use the slingshot to shoot the projectile towards him. Simply click, drag, and release! However, keep in mind that there are three main courses for Elmer. Adjust your aim accordingly and try to hit the target every single time!
        
        Outsmart Daffy by beating him at a classic challenge! How long has it been since you've played tic tac toe with your deskmate? Now you can play against a very fierce opponent. You will take turns in starting the game. The goal is simple: make a line of three symbols in a row first. Be careful, as Daffy is a smart player!
        
        There's more you should know!
        Are you a sporty person? Then you will have a blast playing basketball with Bugs Bunny, one of the best players in the Looney Tunes team. Are you good at scoring points? Try your hand at this game and see how many hoops you can score in 45 seconds. Be careful, as the height will change after each shot! Can you adjust the trajectory of the ball? Shoot without touching the rim for extra points!
        
        Finally, let's go for a run with the fastest member of the Looney Tunes! Are you ready for a race with Road Runner? There are three lanes that he can go on, riddled with plenty of obstacles. Your mission is to click at the exact right moment to switch from one to the other so that Runner doesn't crash or blow up. It sounds easy, but you'll soon find that the faster the race becomes, the more difficult it will be to switch lanes. Can you keep up?
        
        You'll have a blast with the Looney Tunes! All the fun and varied games are bound to keep you glued to the screen for hours, trying to earn a perfect score for each challenge. Say goodbye to boredom and start playing!`,
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/looney-tunes-snap/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 18,
    },
    {
      url: require("./images/nick-sunny-day-super-search.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: `The game is on in the Nick Baseball Stars game. Such a challenging sport as this one requires a lot of practice, determination, and stamina. Not everybody can score impressive home runs! Fortunately, all the Nickelodeon characters are prepared for this challenge. 
    
        Unlike other baseball matches, this one has a twist. To win the round, you only have to accomplish the goal set beforehand. For instance, the game might tell you that you have to score a certain number of points. So as to get these, the ball has to collect some of the floating stars and power-ups!
        
        How to Play
        Even though baseball usually requires a lot of equipment and intensive training, things are simple this time. To get around, you will only need your mouse. Because it is such a precise instrument, it will be a piece of cake to direct the ball wherever you want.
        
        Before the other player throws the ball, you need to make sure that you are prepared for the impact. To do that, you have to click on your character, then drag to build power. The further away you will pull, the more powerful the shot will be. 
        
        You should also try to aim for the floating stars and coins. These are the ones that will actually give you enough points to pass. But do not worry if you don't get them all. The important thing is to have fun and get just enough points to get to the next level. 
        
        You will have lots of fun trying to send the ball as far as possible for the homerun, after collecting the precious points!`,
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/nickelodeon-baseball-stars/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 19,
    },
    {
      url: require("./images/ninjago-keytana-quest.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description:
        "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/ninjago/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 20,
    },
    {
      url: require("./images/oddbods-samebods.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: `Starting the Game
        Click on the red and white PLAY GAME button on the game welcome screen.
        Game Controls
        Desktop
        Use your mouse left click button to select one of the Oddbods to remove it and adjacent matching Oddbods from the level.
        Touchscreen devices
        Tap the screen with your finger to use it like a mouse.
        This game is not timed BUT it does not have an undo button, so try to think multiple steps ahead before making moves.
        The sound control button is in the lower right corner of the game.
        Game Play
        Details
        The current level is shown in the upper left corner of the game.
        Your current level score and the level goal are shown top center of the game.
        Your best score and total score are shown in the top right corner of the game.
        Removing Oddbods
        If one of the Oddbods is isolated from other Oddbods of the same color then you can not remove it unless you can get them adjacent to each other.
        If one of the Oddbods is the only one remaining in its color than it can not be removed.
        Tapping or clicking on Oddbods removes it and any adjacent character of the same color directly above, below, left or right of it.
        All such pieces which are connected up, down, left or right are removed, although connecting diagonally does not count.
        Level Design
        Each level has a unique combination of playing field size, color combinations and Oddbods locations.
        Since Oddbods are taller than they are wide levels appear taller than they are wide even if the Oddbods are organized in a 5×5 or 6×6 grid.
        At the beginning of each level it states a scoring goal for that level.
        You must match or exceed the goal or it is game over.
        Scores
        Removing all Oddbods from the level scores a 100 point bonus.
        For each set you remove this game uses a scoring multiplier effect.
        If you remove 2 characters at a time you score 2 points. (0+2)
        Removing 3 characters at a time is worth 6 points. (2+4)
        Removing 4 characters at a time is worth 12 points. (6+6)
        Removing 5 characters at a time is worth 20 points. (12+8)
        Removing 6 characters at a time is worth 30 points. (20+10)
        Removing 7 characters at a time is worth 42 points. (30+12)
        Removing 8 characters at a time is worth 56 points. (42+14)
        Removing 9 characters at a time is worth 72 points. (56+16)
        Removing 10 characters at a time is worth 90 points. (72+18)
        Removing 11 characters at a time is worth 110 points. (90+20)
        Removing 12 characters at a time is worth 132 points. (110+22)
        Removing 13 characters at a time is worth 156 points. (132+24)
        Removing 14 characters at a time is worth 182 points. (156+26)
        Removing 15 characters at a time is worth 210 points (182+28)
        Removing 16 characters at a time is worth 240 points. (210+30)
        Removing 17 characters at a time is worth 272 points. (240+32)
        The sequence can be run indefinitely.
        The algorithm for each score is adding (x-1)*2 to the score of the prior lessor score.
        Removing 22 characters at a time is worth 462 points.
        Strategy
        Since the game rewards large combinations be willing to make smaller moves if it aligns a larger combination.
        Pieces fall when the pieces underneath them have been removed. If columns have been removed the remaining columns align to the left.
        In general if there are horizontally connected Oddbods higher up in the level design it may make sense to remove them before removing pieces underneath them.
        It is usually better to remove horizontal sets than vertical sets as vertical sets allow you to connect multiple columns.
        If you see isolated Oddbods try to work backward to figure out what other sequences would need to be made for them to match up with the closest neighbor.
        Target Audience
        The game is suited for Oddbods fans of all ages.
        The game has no adult themed content.`,
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/oddbods-samebods/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 21,
    },
    {
      url: require("./images/pinkatatic-stickers-splash.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: `Make a musical instrument using everyday materials, then play with the band. Experiment with different sounds, pitch and tempo.`,
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/pinkalicious-music-game/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 22,
    },
    {
      url: require("./images/powerpuff-girls-morning-mayhem.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: `In the middle of the night, the Townsville has been attacked. This is the reason why your favorite cartoon characters, the Powerpuff Girls, had such a rough night in the Morning Mayhem game. They had to fight the monster that attacked their city and did not get enough sleep.
    
        Now, in the morning, they will have a difficult time starting their day nicely and stopping all of the alarms. Could you help them wake up?
        
        To wake up properly, every person has to stop their alarms first. And so do the Powerpuff Girls. But they cannot go towards the clocks by themselves, because they are too tired. And this is where you can help. All you need to do is to direct them on the right path towards the alarms. 
        
        How to Play
        To help the girls achieve their goals, you will need to drag around some arrows that point towards specific directions. The girls will walk around the room following the path shown by the initial arrows. When they encounter one sign, they will change the course and follow the specified direction.
        
        When they pass above one box containing an indicator, the box will close. This will let the Powerpuff Girl go above that box again the next time, without changing the direction. The point of the game is to arrange the arrows so that the girls will be able to collect all of the clocks and stop all of the alarms.
        
        By the end of every level, the girls will have to go out the door and start their day. So make sure you put the boxes in such a way that they can go outside after they are done collecting the clocks.
        
        What else you should know
        Keep in mind that some of the arrows cannot be moved. This is why you will have to come up with a good strategy and think of the best way to create a path.
        
        As you step up through the higher levels, the challenges will increase. You might have to direct two or three girls at the same time. Just be careful and make sure they do not bump into each other. If they do, they will not follow their path, and you might have to restart the level. It is like a puzzle, and we are sure that you have the brains to solve.
        
        Come and help the Powerpuff Girls start their day properly. The Townsville needs its three superheroes to be fully awake, so what are you waiting for?`,
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/power-puff-girls-morning-mayhem/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 23,
    },
    {
      url: require("./images/rock-n-raven-start.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: `Teen Titans Go! Rock-n-Raven is a skateboarding game based on the Teen Titans Go animated cartoon TV series. Help Raven perform cool stunts and prove to Robin that he is not the best skateboarder in the world.`,
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/teen-titans-go-rock-n-raven/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 24,
    },
    {
      url: require("./images/spider-man-mysterio-rush.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description:
        "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/spider-man-mysterio-rush-game/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 25,
    },
    {
      url: require("./images/spongebob-squarepants-lost-treasures.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: `You'll love the Lost Treasures game if you are a SpongeBob's fan who loves to investigate! Have you ever wondered what lurks in the mysterious corners and forgotten corridors of the quirky town called Bikini Bottom? Sandy, Squidward, Larry the Lobster, and the other inhabitants frequently lose their belongings in the dark rooms underneath Krab's burger joint. However, nobody has been brave enough to go underneath the Krusty Krab and explore the locker rooms. Nobody, until now!
    
        Your job is to play SpongeBob's role and help him make his way through some mysterious realms. It won't be easy, as you'll need to get past many obstacles and threatening enemies! However, the most dangerous journeys are often the most rewarding. Can you find all the lost items and collect as many goodies as you can before the time runs out?
        
        The game consists of seven fascinating levels, set in different locations. Some of the secret rooms are extremely interesting, such as a mine filled with glistening jewels, populated by adorable dwarves! Moreover, there's a surprise in store for you. Can you believe that there's a level made entirely out of golden items? 
        
        How to Play
        Let's play! You only have a few minutes to complete each stage of the game, so you'd better get started! Use the Up, Down, Left, and Right Arrow Keys to move around the room. Remember to check the top left corner of the screen to see which are the objects you need! Once you see one, simply walk towards it to pick it up.
        
        Besides the confusing architecture of every stage, you might encounter some more challenges along the way. For instance, some areas will be closed off at the beginning of the level. To explore them, you will need to find a red switch, then sit on it. Hurry up and check out the new areas!
        
        One of the coolest features of this game is that you can teleport to other areas of the maze by stepping into the grease traps. It might sound gross, but it's pretty useful when you need to travel swiftly. However, make sure you don't get lost!
        
        There's more you should know!
        Try your best to avoid the traps and other obstacles in your way! From giant pieces of chewed bubble gum to sharp objects and moving mining carts, there are plenty of things that can hurt SpongeBob. You'll also come across menacing ghosts and other terrifying enemies. Try to avoid them as best as you can!
        
        The good news is that death doesn't affect your performance within the respective stage. You'll simply be teleported to your location at the beginning of the level and lose some precious seconds.
        
        You can earn bonus points by finding the hidden golden item within each stage of the game. They will help you uncover new secrets within the game and prove that you are skilled when it comes to labyrinths. Do you see the mints scattered everywhere? Find all of them if you want to earn even more points!
        
        Any fan of the SpongeBob SquarePants series will surely enjoy this exciting and mysterious adventure! Can you believe that you have the opportunity to uncover the secrets of Bikini Bottom?`,
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/lost-treasures-spongebob/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 26,
    },
    {
      url: require("./images/Temple-Quest.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: `Try to run for as long as possible in the deadly temple! Jump over gaps, duck under low hanging obstacles and keep running so that the gorilla does not grab you. The longer you survive the better your final score will be. Keep running until you get to the top of the Lagged leaderboards.
    
        How to play: Swipe or arrow keys to run`,
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/temple-quest/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 27,
    },
    {
      url: require("./images/tom-and-jerry-the-movie-the-duel.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: `Are you a big fan of Tom and Jerry? Well, your favorite duo is back with another feud in the Tom and Jerry: The Duel game! The wacky protagonists won't have peace until someone wins, and this fight is not different. Will you join the battle and help your side secure victory?
    
        Which team are you going to assist? You can take Jerry's side in the Easy mode or join Tom for the harder difficulty. In this blockbuster challenge, you have to break as many colorful pieces as possible. Can you earn enough points before the duel is over?
        
        How to Play
        Are you ready to wreak havoc at the hotel? Luckily, there are no fancy tricks involved because you only need your mouse. Pay attention to the screen, and see where you can find groups of the same kind of food. After that, you can simply click on them, and all the blocks will be yours!
        
        Your first step as you start your mission is to choose a difficulty level. If you're playing for the first time, you should begin with the Easy mode. Once you finish the stage and learn the basics, you can switch to the Hard difficulty. Sounds very straightforward, right?
        
        To win the duel, you will have to tap on the colorful pieces and collect them. The more blocks you have in a group, the more points you will earn, so make sure to pay attention! You can even play tricks on your opponent by tapping on the traps. Just be careful not to get caught in them yourself!
        
        Remember that you have a limited amount of moves! For every ten clicks, the hotel will be more damaged. Tom and Jerry are real troublemakers, so make sure to fill your meter before the game ends. If you do so, the victory for this duel will be yours!
        
        Well, are you ready for this battle? Your favorite cat and mouse need your help to win! Whose side will you choose?`,
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/Tom_Jerry_the_Movie_The_Duel/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 28,
    },
    // {
    //   url: require('./images/tomb-runner.jpg'),
    //   profilePic: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D',
    //   username: 'faruktutkus',
    //   description: 'Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ',
    //   song: 'orijinal ses - Computer Science',
    //   htmlUrl: '../21-games/nickelodeon-racing-stars/index.html',
    //   likes: 9689,
    //   comments: 230,
    //   saves: 1037,
    //   shares: 967,
    // },
    {
      url: require("./images/we-love-pandas.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description:
        "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/we-love-pandas/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 29,
    },
    {
      url: require("./images/2-battle-day-brawl.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/battle-day-brawl/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 30,
    },
    {
      url: require("./images/2-be-cool-scooby-doo-the-mysterious-mansion.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl:
        "../21-games/be-cool-scooby-doo-the-mysterious-mansion/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 31,
    },
    {
      url: require("./images/2_ben-10-challenge-stinkflys-showtime.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/ben-10-challenge/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 33,
    },
    {
      url: require("./images/2-ben-10-diamondhead-shoot.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/ben-10-diamondhead-shoot/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 34,
    },
    {
      url: require("./images/2-ben-10-escape-route.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/ben-10-escape-route/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 35,
    },
    {
      url: require("./images/2-ben-10-omnicode.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/ben-10-omnicode/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 36,
    },
    {
      url: require("./images/2_ben-10-power-surge.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/ben-10-power-surge/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 37,
    },
    {
      url: require("./images/2_bugs-bunny-dare-diver.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/bugs-dare-diver/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 38,
    },
    {
      url: require("./images/cartoon-network-summer-games.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/nickelodeon-summer-sports-stars/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 39,
    },
    {
      url: require("./images/2_chhota-bheem-and-header-football-competition.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/ChhotaBheemHeaderFootball/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 41,
    },
    {
      url: require("./images/2_dc-super-hero-girls-food-fight.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/dc-super-hero-girls-food-fight/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 43,
    },
    {
      url: require("./images/dora-and-friends-legend-of-the-lost-horses.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/dora-losthorses/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 44,
    },
    {
      url: require("./images/2_descendants-hidden-mystery-map.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/dc-super-hero-girls-food-fight/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 45,
    },
    {
      url: require("./images/2-kim-possible-mission-improbable.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/kim-possible-mission-improbable-game/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 46,
    },
    {
      url: require("./images/2-learn-origami.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/origami/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 47,
    },
    {
      url: require("./images/2_lego-city-adventures-build-and-protect.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/lego-city-build-and-protect/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 48,
    },
    {
      url: require("./images/2-looney-tunes-recess.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/looney-tunes-recess/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 49,
    },
    {
      url: require("./images/2-looney-tunes-space-jam.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/looney-tunes-space-jam/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 50,
    },
    {
      url: require("./images/2-looney-tunes-recess.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/looney-tunes-tweety-takes-off/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 51,
    },
    {
      url: require("./images/2-mickey-and-minnie-universe.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/mickey-and-minnie-universe/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 52,
    },
    {
      url: require("./images/2-my-knight-and-me-knight-rider.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/my-knight-and-me-knight-rider/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 53,
    },
    {
      url: require("./images/2-nick-basketball-stars-2.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/nick-basketball-stars-2/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 54,
    },
    {
      url: require("./images/2_nick-blaster-squad.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/nick-blaster-squad/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 55,
    },
    {
      url: require("./images/2-nick-cooking-contest.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/nick-cooking-contest/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 56,
    },
    {
      url: require("./images/2_nick-racing-stars.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/nickelodeon-racing-stars/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 57,
    },
    {
      url: require("./images/2_nick-pet-vet.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/nickelodeon-nick-pets-or-real-pets/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 59,
    },
    {
      url: require("./images/2_nick-ultimate-mini-golf-universe.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/nick-ultimate-mini-golf-universe/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 60,
    },
    {
      url: require("./images/2_pink-fairy-house-game.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/pink-fairy-house/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 61,
    },
    {
      url: require("./images/2-powerpuff-girls-panic-in-townsville.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/powerpuff-girls-panic-in-townsville/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 62,
    },
    {
      url: require("./images/2-robin-vs-see-more-start.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/robin-vs-see-more-teen-titans-go/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 64,
    },
    {
      url: require("./images/2-shaun-the-sheep-app-hazard-2.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/shaun-the-sheep-app-hazard2/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 65,
    },
    {
      url: require("./images/2-space-jam-full-court-pinball.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/space-jam-full-court-pinball/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 66,
    },
    {
      url: require("./images/2-spider-man-masked-missions.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/spider-man-games-masked-missions-game/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 67,
    },
    {
      url: require("./images/2-spongebob-squarepants-beachy-keen.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/beachy-keen-spongebob/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 68,
    },
    {
      url: require("./images/2-spongebob-squarepants-grand-sand-fortress.png"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl:
        "../21-games/spongebob-squarepants-grand-sand-fortress/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 69,
    },
    {
      url: require("./images/spongebob-squarepants-lost-treasures.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl:
        "../21-games/spongebob-squarepants-grand-sand-fortress/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 70,
    },
    {
      url: require("./images/2_spongebob-squarepants-monster-island-adventure.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/spongebob-monster-island-adventures/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 71,
    },
    {
      url: require("./images/2_spongebob-squarepants-tasty-pastry-party.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/spongebob-tasty-pastry-party/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 72,
    },
    {
      url: require("./images/2_star-wars-rebels-special-ops.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/star-wars-rebels-special-ops/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 73,
    },
    {
      url: require("./images/2_star-wars-rebels-team-tactics.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/star-wars-rebels-team-tactis/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 74,
    },
    {
      url: require("./images/2-star-wars-x-wing-fighter.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/x-wing-fighter/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 75,
    },
    {
      url: require("./images/2-star-wars-rogue-one-boots-on-the-ground.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/star-wars-rogue-one-boots-on-the-ground/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 76,
    },
    {
      url: require("./images/2-table-tennis-ultra-mega-tournament.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/table-tennis-ultra-mega-tournament/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 77,
    },
    {
      url: require("./images/2_tmnt-tales-of-the-tmnt.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/tales-of-tmnt/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 78,
    },
    {
      url: require("./images/2_tmnt-city-showdown.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/rise-of-tmnt-city-showdown/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 79,
    },
    {
      url: require("./images/2-tmnt-pizza-quest.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl:
        "../21-games/teenage-mutant-ninja-turtles-pizza-quest/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 80,
    },
    {
      url: require("./images/2_tmnt-tales-of-the-tmnt.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/tales-of-tmnt/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 81,
    },
    {
      url: require("./images/2-tom-and-jerry-chasing-jerry.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/tom-and-jerry-chocolate-chase/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 82,
    },
    {
      url: require("./images/2-tom-and-jerry-cheese-swipe.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/tom-and-jerry-cheese-swipe/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 83,
    },
    {
      url: require("./images/2-tom-and-jerry-dont-make-a-mess.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/tom-and-jerry-dont-make-a-mess/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 84,
    },
    {
      url: require("./images/2-toon-cup-2020.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/toon-cup-2020/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 85,
    },
    {
      url: require("./images/2_Winter-Spin-Win.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/nick-winter-spin-and-win/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 86,
    },
    {
      url: require("./images/2-word-play.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/game-dc-wordplay/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 87,
    },
    {
      url: require("./images/2-XLR8-Avoid.jpg"),
      profilePic:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg?x-expires=1688486400&x-signature=ssUbbCpZFJj6uj33D%2BgtcqxMvgQ%3D",
      username: "faruktutkus",
      description: "",
      song: "orijinal ses - Computer Science",
      htmlUrl: "../21-games/ben-10-xlr8-avoid/index.html",
      likes: 9689,
      comments: 230,
      saves: 1037,
      shares: 967,
      id: 88,
    },
  ];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* <header className=" header text-4xl bg-slate-900 text-slate-100 mb-7 py-5 font-sans font-bold">
        <img
          src={`${process.env.PUBLIC_URL}/logo-3.jpg`}
          className="logo"
          alt="Logo"
        />
      </header> */}
      <Navbar />
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-5 mx-2 md:mx-5 mt-[100px]">
        {GameData.map((card) => (
          <div key={card.id}>
            <div>
              <div class=" card1 mb-2 overflow-hidden    rounded-lg shadow">
                <a
                  href={`https://playforia.fun/${card.htmlUrl}`}
                  target="_blank"
                >
                  <div className="relative">
                    <div>
                      <img
                        class=" image rounded hover:cursor-pointer "
                        src={card.url}
                        alt=""
                      />
                    </div>
                    <div className="playicon2 hidden md:block">
                      <FontAwesomeIcon icon={faPlay} />
                    </div>
                    <div className="absolute md:hidden inset-0 flex items-center justify-center">
                      <FontAwesomeIcon
                        className="text-white text-7xl bg-black/50 rounded-full p-5"
                        icon={faPlay}
                      />
                    </div>
                  </div>
                </a>
                <div class="p-2 text-white text-center md:block hidden">
                  <p>{`${card.description.slice(0, 66)}..`}</p>
                  <Link
                    className="text-blue-600 text-base hover:text-blue-400"
                    to={`/game/${card.id}`}
                  >
                    See More ➤
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Bottombar scrollTo={scrollToTop} />
      //helmet
      {GameData.map((video, index) => (
        <>
          <Helmet>
            <title>PlayForia | Home</title>
            <meta name="description" content={video.description} />
            <meta property="og:title" content={`Game: ${video.username}`} />
            <meta property="og:description" content={video.description} />
            <meta property="og:image" content={video.url} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`Game: ${video.username}`} />
            <meta name="twitter:description" content={video.description} />
            <meta name="twitter:image" content={video.url} />
            <link rel="canonical" href={video.url} />
          </Helmet>
        </>
      ))}
    </>
  );
}

export default Home;
