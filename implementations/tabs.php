<!--tabs-->
<!-- 
	this code fragment implements 2 buttons
	to show different tabs.
	It needs two element ids in the parent page: 
		"statement" and "implement"
-->
<div class=flex id=tabs>
	<button tab=statement class=active>Statement</button>
	<button tab=implement >Implementation</button>
	<script>
		//add onclick listeners
		(function(){
			var btns=document.querySelectorAll('#tabs button[tab]');
			for(var i=0;i<btns.length;i++){
				btns[i].onclick=function(){activateTab(this.getAttribute('tab'))};
			}
		})();
		function activateTab(tab){
			//make all invisible
			var btns=document.querySelectorAll('#tabs button[tab]');
			for(var i=0;i<btns.length;i++){
				btns[i].classList.remove('active');
				var id=btns[i].getAttribute('tab');
				document.getElementById(id).classList.add('invisible');
			}
			//make tab visible (button.tab == div.id)
			document.querySelector('#tabs button[tab='+tab+']').classList.add('active');
			document.getElementById(tab).classList.remove('invisible');
		}
	</script>
	<style>
		#tabs {
			margin-left:0.5em;
		}
		#tabs button {
			display:block;
			padding:0.5em;
			background:#fafafa;
			border:1px solid #ccc;
			box-shadow: 0 0 4px 2px rgba(0,0,0,.3) inset;
			outline:none;
		}
		#tabs button.active {
			background:white;
			box-shadow:none;
			border-bottom:1px solid transparent;
		}
		#tabs button:not(.active):hover {
			box-shadow: 0 0 4px 2px rgba(0,0,0,.1) inset;
			transition:box-shadow 0.3s;
		}
	</style>
</div>
