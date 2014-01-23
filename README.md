<h2 dir="ltr"><span style="font-family: Bitter, Georgia, serif; font-size: 30px; line-height: 1.3;">Introduction</span></h2>
<p dir="ltr">Chess is one of the most beautiful and complex board games conceived by humans. It takes great perseverance and determination to build the skill set required to play the game well. What if this inherent complexity of the game is increased just slightly to make the game more interesting without changing it’s essence? This is what ‘2 Layer Chess’ (2LC) tries to accomplish.</p>

<h2 dir="ltr">How to play?</h2>
<p dir="ltr">2LC retains everything that we know and love about chess. As the name suggests, it just adds a layer to the game; another board to be precise. 2LC has 2 boards, one on top of another. The players can use this extra space to attack in ways which are impossible with a single board.</p>
<p dir="ltr">Let’s look at the initial configuration</p>
<p dir="ltr"><img alt="" src="https://lh5.googleusercontent.com/tMcfkgJ1lx1C1Eh20uJbat5QnCRJ6xWSnrl59ADIMz6S0ndvJySgNoXIetS1j1mqymrYE4UymqF9CwEv7-O7cJIyPqyk2Id0aoYqR3ZvPDmOIiqg-DQlGYRNVg" width="260px;" height="259px;" /><img alt="" src="https://lh3.googleusercontent.com/EUjHx1Blrl-EH0hRGnqI3nkD6dUJ1LhiWv4rL6Swv3N4gRJ92GWoR-txAW8AEkyJq_s0ta3pO2V_nUOfg7qpMJAx7gnJetTca9ZM_822iZ4SMMhHL3HfR1X8Cw" width="259px;" height="260px;" /></p>
<p dir="ltr">                      Bottom Board (BB)                                                 Top Board (TB)</p>

<h3 dir="ltr">Notations</h3>
<p dir="ltr">All standard notations will hold, except for the fact that there will be 2 extra letters at the beginning of each square's notation to identify to which layer it belongs to. For eg :</p>

<ul>
	<li dir="ltr">
<p dir="ltr"><strong>BBe4</strong> - Bottom Board <strong>e4</strong></p>
</li>
	<li dir="ltr">
<p dir="ltr"><strong>TBe4</strong> - Top Board <strong>e4</strong></p>
</li>
</ul>
<h3 dir="ltr">Moves</h3>
<p dir="ltr">All the pieces move in the same way as in the original game with an added option of jumping layers. That is an ‘e’ pawn move to start off the game can now happen in 4 different ways rather than 2. That is, it can go to <strong>BBe3, BBe4, TBe3 </strong>and<strong> TBe4</strong>. Note that all the pawns initially start out from the Bottom Board.<img alt="" src="https://lh5.googleusercontent.com/vo4mzE7SWbbImoN_Bqjv-YFPq9JXmZkGcUt3gVFc7A_CiVgYJGgmJBjGui7qtHVFW7hkYc_0-q3x0ihw8zjrzPWsoP_1TrEkZYgjTXUk-lRUcWUImJ-SUkEijw" width="531px;" height="269px;" /></p>
<p dir="ltr">                       Bottom Board (BB)                                                 Top Board (TB)</p>
<p dir="ltr">Also, any piece is free to make one jump per move. That is, a piece can either go from TB to BB or BB to TB in a move, but cannot jump over any blocking piece by jumping twice. For example,</p>
<p dir="ltr"><img alt="" src="https://lh6.googleusercontent.com/2Qn2pHmsb11ylMbkTmQzkCjDIJi7BINpuQqkXMyPuUTT_U0q67EwjUjk6nU1OfyqveM_Rtwkm-HTmm7dAj3dMReEUG0mOEtVDejMwwAcGMuXS4zZXhvCzM2zEg" width="518px;" height="260px;" /></p>
<p dir="ltr">                      Bottom Board (BB)                                               Top Board (TB)</p>
<p dir="ltr">Here, the Bishop on <strong>BBc1</strong> can move along the diagonal and make a jump to say <strong>TBg5</strong>. But it cannot be moved to <strong>BBg5</strong> as the pawn on <strong>BBd2</strong> is blocking it and no piece can make 2 jumps in the same move.</p>
<p dir="ltr">Also, the Bishop on <strong>TBb5</strong> can attack the Knight on <strong>BBc6</strong> as well as the pawn on <strong>BBd7</strong> as it does not violate the ‘single jump rule’. This means that the no piece is safe anymore and the players need to put in extra effort to safeguard their pieces. Also, they need to come up with more sophisticated mating maneuvers as simple mating tricks like the ‘Fool’s Mate’ will not work anymore as the next figure shows.</p>
<p dir="ltr"><img alt="" src="https://lh4.googleusercontent.com/q7zIbwQRTVjBP-B4O21T11qX7IQkrHW3G47as5PQi1FK3HEsrmd99HDfSLwJ-SxdxUv36nyStLOJrbAuIVGh_GnUjy_xz7YA-7wI-FzXhPfxnpKdPID-dWevLA" width="512px;" height="257px;" /></p>
<p dir="ltr">We can see how easy it is for the King to move away from a certain checkmate because of the additional space provided. We have just scratched the surface of what can be done using this sort of a setup.</p>

<h2 dir="ltr">Technology</h2>
<p dir="ltr">The 2 player version of this game can be easily built using existing chess APIs with minor modifications. Although a chess engine which plays such a game will require more work and would also be a nice research topic for people working on Machine Learning and AI.</p>
&nbsp;
