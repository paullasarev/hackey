hackey
======

Hockey-style multiplayer game based on html5/node.js

## Description

each player control play unit like
variant 1:

```
      *
 ***  *
***** *
 ***  *
      *
```

variant 2: left- and rigth- sided units, rotate and kick - by mouse wheel/two-finger gesture

```
 ***  
***** *
 ***  *
      *
      *
      *
```
  
```
      *
      *
      *
 ***  *
***** *
 ***
```  

active element of play unit - body (circle) and board (rectangle) as foot/finger
* number inside the circle
* color by teams

balance
* playing should be enought easy to be interesting

game can have any number of observers
* schematically show the observer mass/count on perifery of game area

board can rotate over the body, controlled by mouse wheel or two-finger gesture	  

player can hit by board to some (short) distance - click or tap

ball is deflected by players boards and bodies, walls around the game area

players form two teams

target is to score a goal into the gate of opponent side

number of players in the team and size of game area forms game categories

goalkeeper can catch the ball in near-gate area

game rules
* offside rules? 

player can kick the ball by any side of the board and can make curve (screw) ball, 
* control by separate area gesture of ctrl+mouse movement
* variant - mouse button down, vector gesture, mouse button up; direction and length of vector form strike impulse

## implementation milestones/features
 
minimum
* two players
* small area

game sessions:
* rest api
* keep until there are at least one player
* recording/replaying 

player registry
* history
* rating

teams registry
* history
* rating

championships by categories
* cateroties
* teams
* history/records
