***Note : *** The code is in no way completed. Only the skeleton is in place and may change regularly
<h2>Introduction</h2>
<span style="font-family: 'Source Sans Pro', Helvetica, sans-serif; font-size: 16px; line-height: 1.5;">Chess is one of the most beautiful and complex board games conceived by humans. It takes great perseverance and determination to build the skill set required to play the game well. What if this inherent complexity of the game is increased just slightly to make the game more interesting without changing it’s essence? This is what ‘2 Layer Chess’ (2LC) tries to accomplish.</span>
<h2 class="c4 c13"><a name="h.68c2p3twegue"></a><span>How to play?</span></h2>
<p class="c4"><span>2LC retains everything that we know and love about chess. As the name suggests, it just adds a layer to the game; another board to be precise. 2LC has 2 boards, one on top of another. The players can use this extra space to attack in ways which are impossible with a single board. </span></p>
<p class="c4 c12"><span>Let’s look at the initial configuration</span></p>
<p class="c4 c12 c5"><a href="http://rahular.com/wp-content/uploads/2014/01/initial_state.png"><img class="alignnone size-medium wp-image-174" alt="initial_state" src="http://rahular.com/wp-content/uploads/2014/01/initial_state-300x173.png" width="300" height="173" /></a></p>

<h3 class="c4 c6"><a name="h.e01p9i53e80j"></a><span>Notations</span></h3>
<p class="c4 c14">All standard notations will hold, except for the fact that there will be 2 extra letters at the beginning of each square's notation to identify to which layer it belongs to. For eg :</p>

<ul class="c9 lst-kix_ffzmtipjy5mk-0 start">
	<li class="c4 c7"><span class="c2">BBe4 </span><span>- Bottom Board </span><span class="c2">e4</span></li>
	<li class="c4 c7"><span class="c2">TBe4 </span><span>- Top Board </span><span class="c2">e4</span></li>
</ul>
<h3 class="c4 c13"><a name="h.67aw5ynw4mg4"></a><span>Moves</span></h3>
<p class="c4"><span>All the pieces move in the same way as in the original game with an added option of jumping layers. That is an ‘</span><span class="c2">e</span><span>’ pawn</span><span class="c2"> </span><span>move to start off the game can now happen in 4 different ways rather than 2. That is, it can go to </span><span class="c2">BBe3, BBe4, TBe3 </span><span>and </span><span class="c2">TBe4</span><span>. Note that all</span><span> the pawns initially start out from the Bottom Board.</span></p>
<p class="c4 c5"><a href="http://rahular.com/wp-content/uploads/2014/01/red_dots.png"><img class="alignnone size-medium wp-image-175" alt="red_dots" src="http://rahular.com/wp-content/uploads/2014/01/red_dots-300x167.png" width="300" height="167" /></a></p>
<p class="c1"><span>Also, any piece is free to make </span><span class="c2">one </span><span>jump per move. That is, a piece can either go from TB to BB or BB to TB in a move, but cannot jump over any blocking piece by jumping twice. For example,</span></p>
<p class="c1 c5 c15"><a href="http://rahular.com/wp-content/uploads/2014/01/move_rules.png"><img class="alignnone size-medium wp-image-176" alt="move_rules" src="http://rahular.com/wp-content/uploads/2014/01/move_rules-300x172.png" width="300" height="172" /></a></p>
<p class="c1"><span>Here, the Bishop on </span><span class="c2">BBc1 </span><span>can move along the diagonal and make a jump to say </span><span class="c2">TBg5</span><span>. But it cannot be moved to </span><span class="c2">BBg5 </span><span>as the pawn on </span><span class="c2">BBd2 </span><span>is blocking it and no piece can make 2 jumps in the same move.</span></p>
<p class="c1"><span>Also, the Bishop on </span><span class="c2">TBb5 </span><span>can attack the Knight on </span><span class="c2">BBc6 </span><span>as well as the pawn on </span><span class="c2">BBd7 </span><span>as it does not violate the ‘single jump rule’. This means that the no piece is safe anymore and the players need to put in extra effort to safeguard their pieces. Also, they need to come up with more sophisticated mating maneuvers as simple mating tricks like the ‘Fool’s Mate’ will not work anymore as the next figure shows. </span></p>
<p class="c4 c5"><a href="http://rahular.com/wp-content/uploads/2014/01/fools_mate.png"><img class="alignnone size-medium wp-image-177" alt="fools_mate" src="http://rahular.com/wp-content/uploads/2014/01/fools_mate-300x150.png" width="300" height="150" /></a></p>
<p class="c4"><span>We can see how easy it is for the King to move away from a certain checkmate because of the additional space provided. We have just scratched the surface of what can be done using this sort of a setup.</span></p>

<h2 class="c4 c13"><a name="h.5ld2jc2eoqxg"></a><span>Technology</span></h2>
<p class="c4"><span>The 2 player version of this game can be easily built using existing chess APIs with minor modifications. Although a chess engine which plays such a game will require more work and would also be a nice research topic for people working on Machine Learning and AI. </span></p>
<p class="c4 c10"></p>
&nbsp;
