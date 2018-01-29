<!--imports.php-->

<!--meta-->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<meta name="description" content="ecoinvent">

<!--link-->
<link rel=stylesheet href=css.css>

<!--javascript main structures/functions-->
<script src="format.js"></script><!--utils for number formatting-->
<script src="utils.js"></script><!--metcalf figures and tables-->
<script src="dataModel/constants.js"></script>
<script src="dataModel/inputs.js"></script>
<script src="dataModel/technologies.js"></script>
<script src="dataModel/variables.js"></script>
<script src="dataModel/outputs.js"></script>
<script src="dataModel/methods.js"></script>

<!--just descriptive objects-->
<script src="dataModel/combinations.js"></script>
<script src="dataModel/terms.js"></script><!--units and descriptions-->

<!--metcalf technologies-->
<script src="techs/fractionation.js"></script>
<script src="techs/bod_removal_only.js"></script>
<script src="techs/sst_sizing.js"></script>
<script src="techs/nitrification.js"></script>
<script src="techs/n_removal.js"></script>
<script src="techs/bio_P_removal.js"></script>
<script src="techs/chem_P_removal.js"></script>
<script src="techs/metals_doka.js"></script>

<!--css-->
<style>
	body {
    font-family:Charter,serif;
		margin:0 auto;
		max-width:80em;
		overflow-y:scroll;
		margin-bottom:50px;
	}
  th {
    background:#eee;
  }
	#root {
		margin-left:8px;
	}
	.number {
		text-align:right;
	}
	.flex {
		display:flex;
		flex-wrap:wrap;
	}
	.unit {
		font-size:11px;
	}
  .help{
    cursor:default;
  }
  input[type=number]{
    text-align:right;
    width:80px;
  }
</style>

<!--end imports.php-->
