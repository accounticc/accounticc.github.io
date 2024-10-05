var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function(){
  Scratch.LoggedInUser = new Scratch.LoggedInUserModel(Scratch.INIT_DATA.LOGGED_IN_USER.model, Scratch.INIT_DATA.LOGGED_IN_USER.options);
  Scratch.LoginModal = new Scratch.LoginView({model: Scratch.LoggedInUser, el: '#login-dialog'});
  Scratch.LoginNav = new Scratch.LoginView({model: Scratch.LoggedInUser, el: '#login-dropdown'});
  

  // add data-control="modal-login" to element site-wide to require login
  if(!Scratch.INIT_DATA.LOGGED_IN_USER.options.authenticated){
    $('body').on('click.login', '[data-control="modal-login"]', function() {
      $('#login-dialog').modal('show');
      setTimeout(function() {$('#login-dialog input:first').focus();}, 200);
    });
  }
  
  // prevent the spacebar from propagating to the window and bypassing the swf
  // TODO: Can add to js that controls swf (potentially scratch_app.js)
  $('object').keydown(function(e) { 
    if (e.keyCode == 32) {
      e.stopPropagation();
    }
  });

  $('#topnav .messages').notificationsAlert();
});



}
/*
     FILE ARCHIVED ON 00:12:50 May 10, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:02:56 Oct 05, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.098
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.011
  esindex: 0.012
  cdx.remote: 28.411
  LoadShardBlock: 138.257 (3)
  PetaboxLoader3.datanode: 113.047 (4)
  PetaboxLoader3.resolve: 80.002 (2)
  load_resource: 65.448
*/