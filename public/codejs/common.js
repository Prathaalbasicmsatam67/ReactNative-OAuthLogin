 $(document).ready(function(){
               // jQuery.getScript("https://cdn.jsdelivr.net/npm/hls.js@latest")
                var url = "http://10.139.40.197/packagerx/JIOWEBINARLIVE_HLS1/JIOWEBINARLIVE.m3u8";
                if(Hls.isSupported())
                    {
                        var video = document.getElementById('video');
                        var hls = new Hls();
                        hls.loadSource(url);
                        hls.attachMedia(video);
                        hls.on(Hls.Events.MANIFEST_PARSED,function()
                        {
                            video.play();
                        });
                    }
                    else if (video.canPlayType('application/vnd.apple.mpegurl'))
                    {
                        video.src = url;
                        video.addEventListener('canplay',function()
                        {
                            video.play();
                        });
                    }
        
                $("#SaveCondolenceMessage").validate({
                	  rules: {
                		    prefix:"required",
	                	    name: "required",
	                	    message: "required"
                	  },
                	  messages: {
                		  prefix: {
                	      required: "Please select prefix",
                	    },
                	    name: {
                  	      required: "Please enter Name",
                  	    },
                  	  message: {
                  	      required: "Please enter Message",
                  	    }
                	  },
                	  submitHandler: function(form) {        
                          form.submit();        
                   }
                	});
 });