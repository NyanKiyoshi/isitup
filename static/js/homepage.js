(function ($)
{
	homepage = function (input_val)
	{
		var message = "Please enter a domain.";

		// Reset the form
		$("#submit").attr("disabled", false);
		$("#input").attr("disabled", false).css("color", "#AAA");

		// Clears the default input value on click
		// Changes the colour of text input
		$("#input").on("focus", function ()
		{
			if ($(this).val() == input_val)
			{
				$(this).val("");
			}

			$(this).css("color", "#36393D");
		});

		// Hijack form submission
		$("#form").on("submit", function ()
		{
			// Retrieve the value from the input field
			var url = $("#input").val();
			
			// Only if the url contains something we can submit
			if (url && url != message)
			{
				// Disable the form from further submissions
				$("#input").attr("disabled", true).css("color", "#AAA");
				$("#submit").attr("disabled", true);
				
				// Change the browser's url, adding only the domain
				window.location = "/" + punycode.toASCII(url)
												.replace(/^[ \s]+|[ \s]+$|http(s)?:\/\/|\/(.*)/g, "")
												.toLowerCase();
			}
			else
			{
				$("#input").val(message).css("color", "#AAA");

				input_val = message;
			}
			
			// Return false if input is empty
			return false;
		});
	};
})(jQuery);

/*! http://mths.be/punycode v1.2.0 by @mathias */
(function(u){var I,e=typeof define=='function'&&typeof define.amd=='object'&&define.amd&&define,J=typeof exports=='object'&&exports,q=typeof module=='object'&&module,h=typeof require=='function'&&require,o=2147483647,p=36,i=1,H=26,B=38,b=700,m=72,G=128,C='-',E=/^xn--/,t=/[^ -~]/,l=/\x2E|\u3002|\uFF0E|\uFF61/g,s={overflow:'Overflow: input needs wider integers to process','not-basic':'Illegal input >= 0x80 (not a basic code point)','invalid-input':'Invalid input'},v=p-i,g=Math.floor,j=String.fromCharCode,n;function y(K){throw RangeError(s[K])}function z(M,K){var L=M.length;while(L--){M[L]=K(M[L])}return M}function f(K,L){return z(K.split(l),L).join('.')}function D(N){var M=[],L=0,O=N.length,P,K;while(L<O){P=N.charCodeAt(L++);if((P&63488)==55296&&L<O){K=N.charCodeAt(L++);if((K&64512)==56320){M.push(((P&1023)<<10)+(K&1023)+65536)}else{M.push(P,K)}}else{M.push(P)}}return M}function F(K){return z(K,function(M){var L='';if(M>65535){M-=65536;L+=j(M>>>10&1023|55296);M=56320|M&1023}L+=j(M);return L}).join('')}function c(K){return K-48<10?K-22:K-65<26?K-65:K-97<26?K-97:p}function A(L,K){return L+22+75*(L<26)-((K!=0)<<5)}function w(N,L,M){var K=0;N=M?g(N/b):N>>1;N+=g(N/L);for(;N>v*H>>1;K+=p){N=g(N/v)}return g(K+(v+1)*N/(N+B))}function k(L,K){L-=(L-97<26)<<5;return L+(!K&&L-65<26)<<5}function a(X){var N=[],Q=X.length,S,T=0,M=G,U=m,P,R,V,L,Y,O,W,aa,K,Z;P=X.lastIndexOf(C);if(P<0){P=0}for(R=0;R<P;++R){if(X.charCodeAt(R)>=128){y('not-basic')}N.push(X.charCodeAt(R))}for(V=P>0?P+1:0;V<Q;){for(L=T,Y=1,O=p;;O+=p){if(V>=Q){y('invalid-input')}W=c(X.charCodeAt(V++));if(W>=p||W>g((o-T)/Y)){y('overflow')}T+=W*Y;aa=O<=U?i:(O>=U+H?H:O-U);if(W<aa){break}Z=p-aa;if(Y>g(o/Z)){y('overflow')}Y*=Z}S=N.length+1;U=w(T-L,S,L==0);if(g(T/S)>o-M){y('overflow')}M+=g(T/S);T%=S;N.splice(T++,0,M)}return F(N)}function d(W){var N,Y,T,L,U,S,O,K,R,aa,X,M=[],Q,P,Z,V;W=D(W);Q=W.length;N=G;Y=0;U=m;for(S=0;S<Q;++S){X=W[S];if(X<128){M.push(j(X))}}T=L=M.length;if(L){M.push(C)}while(T<Q){for(O=o,S=0;S<Q;++S){X=W[S];if(X>=N&&X<O){O=X}}P=T+1;if(O-N>g((o-Y)/P)){y('overflow')}Y+=(O-N)*P;N=O;for(S=0;S<Q;++S){X=W[S];if(X<N&&++Y>o){y('overflow')}if(X==N){for(K=Y,R=p;;R+=p){aa=R<=U?i:(R>=U+H?H:R-U);if(K<aa){break}V=K-aa;Z=p-aa;M.push(j(A(aa+V%Z,0)));K=g(V/Z)}M.push(j(A(K,0)));U=w(Y,P,T==L);Y=0;++T}}++Y;++N}return M.join('')}function r(K){return f(K,function(L){return E.test(L)?a(L.slice(4).toLowerCase()):L})}function x(K){return f(K,function(L){return t.test(L)?'xn--'+d(L):L})}I={version:'1.2.0',ucs2:{decode:D,encode:F},decode:a,encode:d,toASCII:x,toUnicode:r};if(J){if(q&&q.exports==J){q.exports=I}else{for(n in I){I.hasOwnProperty(n)&&(J[n]=I[n])}}}else{if(e){define('punycode',I)}else{u.punycode=I}}}(this));