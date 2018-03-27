/**
  * "Hydraulic overload" a.k.a. "rain"
  * Remove a soluble fraction and a particulate fraction of the influent
  * due to combined sewer overflows
  * we should include metals also TODO
  *
  */

function cso_removal(Fractionation, CSO_particulate, CSO_soluble){
  CSO_particulate /= 100; //convert percentage to rate
  CSO_soluble     /= 100; //convert percentage to rate
  var R=Fractionation;    //fractionation result object generated in 'fractionation.js'

  /*apply removal rates {bs,nbs,bp,nbp}*/
  var bsCOD_discharged  = R.bsCOD.value    * CSO_soluble;
  var nbsCOD_discharged = R.nbsCODe.value  * CSO_soluble;
  var bpCOD_discharged  = R.bpCOD.value    * CSO_particulate;
  var nbpCOD_discharged = R.nbpCOD.value   * CSO_particulate;
  var sCOD_discharged   = bsCOD_discharged + nbsCOD_discharged;
  var pCOD_discharged   = bpCOD_discharged + nbpCOD_discharged;
  var COD_discharged    = sCOD_discharged  + pCOD_discharged;

  R.bsCOD.value        -= bsCOD_discharged;
  R.rbCOD.value        -= R.rbCOD.value*CSO_soluble;
  R.nbsCODe.value      -= nbsCOD_discharged;
  R.bpCOD.value        -= bpCOD_discharged;
  R.nbpCOD.value       -= nbpCOD_discharged;
  R.sCOD.value         -= sCOD_discharged;
  R.pCOD.value         -= pCOD_discharged;
  R.bCOD.value         -= (bsCOD_discharged  + bpCOD_discharged);
  R.nbCOD.value        -= (nbsCOD_discharged + nbpCOD_discharged);
  R.COD.value          -= (bsCOD_discharged  + bpCOD_discharged + nbsCOD_discharged + nbpCOD_discharged);

  //BOD
  var sBOD_discharged = R.sBOD.value*CSO_soluble;
  var pBOD_discharged = R.pBOD.value*CSO_particulate;
  var BOD_discharged  = sBOD_discharged + pBOD_discharged;
  R.sBOD.value       -= sBOD_discharged;
  R.pBOD.value       -= pBOD_discharged;
  R.BOD.value        -= (sBOD_discharged + pBOD_discharged);

  //TSS
  var TSS_discharged  = R.TSS.value  * CSO_particulate;
  var VSS_discharged  = R.VSS.value  * CSO_particulate;
  var iTSS_discharged = R.iTSS.value * CSO_particulate;
  R.TSS.value        -= TSS_discharged;
  R.VSS.value        -= VSS_discharged;
  R.iTSS.value       -= iTSS_discharged;

  //TKN
  var NH4_discharged   = R.NH4.value     * CSO_soluble;
  var bsON_discharged  = R.bsON.value    * CSO_soluble;
  var nbsON_discharged = R.nbsON.value   * CSO_soluble;
  var bpON_discharged  = R.bpON.value    * CSO_particulate;
  var nbpON_discharged = R.nbpON.value   * CSO_particulate;
  var sON_discharged   = bsON_discharged + nbsON_discharged;
  var pON_discharged   = bpON_discharged + nbpON_discharged;
  var ON_discharged    = pON_discharged  + sON_discharged;
  var TKN_discharged   = ON_discharged   + NH4_discharged;
  R.NH4.value         -= NH4_discharged;
  R.bsON.value        -= bsON_discharged;
  R.nbsON.value       -= nbsON_discharged;
  R.bpON.value        -= bpON_discharged;
  R.nbpON.value       -= nbpON_discharged;
  R.sON.value         -= sON_discharged;
  R.pON.value         -= pON_discharged;
  R.ON.value          -= ON_discharged;
  R.TKN.value         -= TKN_discharged;

  //TP
  var PO4_discharged   = R.PO4.value     * CSO_soluble;
  var bsOP_discharged  = R.bsOP.value    * CSO_soluble;
  var nbsOP_discharged = R.nbsOP.value   * CSO_soluble;
  var bpOP_discharged  = R.bpOP.value    * CSO_particulate;
  var nbpOP_discharged = R.nbpOP.value   * CSO_particulate;
  var sOP_discharged   = bsOP_discharged + nbsOP_discharged;
  var pOP_discharged   = bpOP_discharged + nbpOP_discharged;
  var OP_discharged    = pOP_discharged  + sOP_discharged;
  var TP_discharged    = OP_discharged   + NH4_discharged;
  R.PO4.value         -= PO4_discharged;
  R.bsOP.value        -= bsOP_discharged;
  R.nbsOP.value       -= nbsOP_discharged;
  R.bpOP.value        -= bpOP_discharged;
  R.nbpOP.value       -= nbpOP_discharged;
  R.sOP.value         -= sOP_discharged;
  R.pOP.value         -= pOP_discharged;
  R.OP.value          -= OP_discharged;
  R.TP.value          -= TP_discharged;

  return {
    //COD discharged
    BOD_discharged: {value:BOD_discharged, unit:"g/m3_as_O2", descr:"Discharged_BOD_by_CSO"},
    COD_discharged: {value:COD_discharged, unit:"g/m3_as_O2", descr:"Discharged_COD_by_CSO"},
    //TSS discharged
    TSS_discharged:  {value:TSS_discharged,  unit:"g/m3",       descr:"Discharged_TSS_by_CSO"},
    //TKN discharged
    TKN_discharged:  {value:TKN_discharged,  unit:"g/m3_as_N",  descr:"Discharged_TKN_by_CSO"},
    //TP discharged
    TP_discharged:   {value:TP_discharged,   unit:"g/m3_as_P",  descr:"Discharged_TP_by_CSO"},
  }
}

/*test*/
(function(){
  var debug=false;
  if(debug==false)return;
  console.log(
    //cso_removal(Fractionation, CSO_particulate, CSO_soluble)
  );
})();
