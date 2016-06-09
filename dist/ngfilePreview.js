angular.module('ngFilePreview', [])

.provider('filePreview', function filePreviewProvider() {

	this.types = {
		image: { showIcon: false, thumbnail: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAB8lJREFUeJztnWmoVkUYx3/vNS0tLc12W7XdyBbbzMRMQsoMCawvlVAgluW3ovoQEUn0ISqooIU2MmgPs8h2SFrN9kUtXLKsKE3zamlvH5570W7PnOW958yZOe/zgwGZ9zrzPzPPmTNnnmfmgGEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhhE9jaoF5GQMMA3Yt2ohDlYBc4H3qhZSN/oDjwHNSNJDwI5lNES78gjVd2redH8pLREJs4AtpDfSggxljc9QTqhpbNYGqxtPkb2RkugLfJGjrNDSp8AO2ZvNPx1VC0jhKuCoqkX0gmOAmVWLqIIiRoB9gfU5ygk1rQP2ytN4PilrBPi1gL+7DdilAC1VMwi4tWoRLspaBxgATESe4S6awCLge+W3ccCbxcuqlDHAwqpFxEBf4DOqH7qLTh8DfQpsp9oym+o7q6x0RYHtVAh5HwFDganI8H4ccADJw7xRPn8DK5AR5hXgaeC3oisZCtwFdFL9XWQpOXUCdwBD1J5sgTOAnwK4MEv50mrgNKU/czEOu+tjThuRtw8nSXOAocCXwB5JBRjB8xOymvq79mPSa8kc4MwyFBle2QXpZ9Xx5hoBdkYspw4rcQasBfYBNvX8wbUUPB7r/DqxGw7XtMsATihPi1ERo7VMlwHsV6IQoxrUPnUFK+xaopCqWQcsRWbF67vyBgKDgRH4u/YVwOKuf49CVlXLZDct02UAdXJaLAPmAW8A7wI/I+/IGg3Ed38KMg+aDBxcsJ4VwAzg5e10NIBzgHuAYQXX102uPs0T0BFi+huJzB1D71zeDeB04OGuMnuraznJIe3DkNDyMtrkiTwXHqsB/APcSznD6YHAfV11tKpvUoZ6pvSi/LY2gI+AE/NcZIuMRjxvefUtJ9to1IGs43sxgNCDQrNyO3Aq8KGHuj5A5gh35vx/i5GOSOMftk0OSyfokOUMbAEuAR7P8LcjgbMQQzkCed4O7PptPfLs/RoJ21qA+EFcbAauRgzuQYpvx8q37MXwCOgEzk65jv7AlUh8ft7yP0EieHZKqWMS2TymeR4BP7agt6VHgIvQDWAL8ormogFcDqwpoK4fgekkd94UYGuGss5NKKObqQVorr0BzEjQPgx4u4Q6X0ccKi6uyFDGSpLf8w+gnLu/VgbwGO678VTglxLrXgOc5Ki7gTRyWhmrkBFj+wl4B3Lnl9X5tTGAlWybuPVkAvCnBw0bkEgpjUHADxnLWQ3MB16i3I6vlQFMdeg9Ab/byNYBxzq0TAugnWppAG+hD/1DkBm2bz3L0B1HDeCdANorkwHEtBB0M3IhPbmb8j1pGoegLwY1Ea1RE9oI8An63X9WANrOUHQ1gM8D0FabEeAh9Ls/hDtN09BEPIjBE4sBaNY7FjjZtxCFsYhvoCdzfQtphRgM4FPkNakn030LSeASJW8Vyf6EIIjBAN5U8jqA8z3rSML1evq6VxUtEIMBaK7RUUgMXyjsCRyt5Htz67ZKDAbwjZJ3vHcV6WiaNO1BEYMBrFDyDvOuIp3Dlbzl3lXkJAYD+EPJG+pdRTqapvVKXlDEYAAblbwB3lWko22l2+BdRU5iMADt0OW/vKtI538bL0mPJqqcGAxAu7PWeleRzjolz+W6DoYYDGBvJe877yrSWarkBXtCaDcxGIA24//cu4p0NE3am0FQxGAA2mHRC5GtWqHQCbyv5GuLQ0ERgwFo7taNyGbPUHgN2SvQE017UMRgAGOQ+P6ePOpbSAKalgFIkGrQxGAAOyJbp3vyJLqX0DcrgWeV/POAfp615CYGAwDd3bqZMI5hn4M+H7nYt5AiCS0kbCswXNG5A9WGXi1CP3jhMLLtFLKQsIx0ANco+VuAS6lmZXATEpSyVfntWuJpW5XQRoAmMswe6dA7swI9lzm0jCTbF9OCGAFchGgATSTCxrUtbI5HHTc5NDQoZ1+iGcB2KekrXDd6qP+6hPpnBdA+tTeAzcjHKlxciMQQFF3vWuCChHpPROYiVbdP7Q2gibx775+g/xDgxQLrex45JMrFQZRzro8ZQEL6inRv2wRk3tBqHa8i5wUmsTdytEzV7dF2BtAEliB3exojgBuQDaabEsrrRMLQr0dfd9DKXRZAO7StATSRQxsm5Li2PkjnjkOOmZnc9e/h5Ht3n8i2U0djSLU1gCZytNrN+AnB6o+8cvbmwEgzgJLSEsRxVMYxaw1ktIhlyM9kAFEvVyqMQA6Gfg/ZOlbE+X19ka1fHwAvkG3OEQ2xHxTpYjTiol2D7NKdh0QRdWb8/wOQT66dC1yEbP2qJXU1gG72Qj5FOxtZpFmMbNdagizsdG86GYScp38oEsc3igh8+UVQdwPYnn7IEW+uY97akrrNAYycmAG0OWYAbY4ZQJvjMgBto6MRN2qfugwgxM2XRu9QPx7tMoBvSxRiVIN6XI3LABaWKMSoBrVPXU6TBmIxh5Ymx/DJF8AxiFPoP7hGgCbi8jTqwS0onZ9GH+TrWVW7MS31Ls2nF6/7uyMfZKz6Iiy1lt6ngAM1ByInX1d9MZbypQfQz1dqmdOA5yjmI8qWykl/Ac+Q41yCVkKnBiNBlMcjX+oI/ii0mrMJOU11ERLRbIt4hmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEY7ca/PE5byMAYd0sAAAAASUVORK5CYII=' },
		video: { showIcon: true, thumbnail: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAA+hJREFUeJzt3U+olUUYx/GvppiVkWlBiFYUlEgZhbUKpL9Ui0ioFrVJqIXoTlsUhJC4SMFdm2qRIUguUggpSNuJJbVoIdwWQloWmQklgZDXFlNq3jPomXfeM3PufD8wcLlwnpn7vL/zvu95OdwBSZIkSZIkSZIkSZIkSZIkSZIkSeNnRuLrrgaWAUuAOfmWM3bOAaeACeCHwmu5nAXAyS4F5gCvAPuAM4Q/3nFh/Ai8CyxPbXCP1gHbuxRYBRylfJPHZewEbkrqdF5zgQ+5sKYkWyjf0HEcx4F7Evqdy63ANxetJykAb1GugdNh/AosHrrr3T0KnLhkLUMHYAVwljKNm07ji2Eb39F64O8B6xg6AJ8PKOJIG48M2fsU1xAOcmwNAwMwM1JsMfB4/jU2a3XP9e8ADgIvDvvCWABWkv6MQFP1eQZ4CjhE4g1nLAD3Ji9Hg9wC3Jy55gzgTeBTYH5qkVmR3y9MLaiohYRPBTnMI3y+f65roVgArutaWFPMy1TnLuATYGmOYrFLgNf//HL09FngazIdfIgHQHWZCbxNeOdfn7Nw7BKgetwA7ACe7qO4AajbMmA3cGdfE3gJqNfzwFf0ePDBANToKuAd4GPg2r4n8xJQlwWEZ/aPjWpCA1CP+wh3+beNclIvAXV4GTjAiA8+GIAarAU+Inx9a+QMQHl3l5zcADTOADTOADTOADTOADTOADTOADTOADTOADTOADTOADTOADTOADTOADTOADTOADTOADTOADTOADTOADTOADTOADTOADTOADTOADTOADTOADTOADTOADTOADTOADTOAJT3e8nJDUB5G4HNhE0dRs4AlDdJ+Lfvq4A/Rj25AajHbuBB4PAoJzUAdZkAHgJ2jWpCA1Cf08ALwOuEXdt6ZQDqtQV4grD/X28MQN32Aw8QNoXqhQGo3zHgYeD9PoobgPFwBngVeO3fn7OJBaDIQ4lpbjJDjfcIZ4NjGWoB8QCczjWBzvszU51DhPuC/TmKxQLQ651no37LWOsE4RPC1q6FYgH4rmth/c9x8r+pzgIbCM8Mks/YsQB8SZ5rloJ9PdbeRXh6+H3Ki2MB+Imwfbzy+KDn+oeBFcCenEXvJ5xmYvvRO65sfDZs4zv4b0PpQcdtZ0rBNwYUclz5+AVYNHTXu3sSOHnJWpICALCJMs0b93GUjHv8Jrgd+Pai9SQHAOAZ4AjlmjlOYxLYDtyY1Om85hK2me8cAIDZwEvAXuAvyje6tnEE2EbZd33MGkIop0jd0nw2YbOjJRTa7aoSk4QvdU4APxdey+XMB06VXoQkSZIkSZIkSZIkSZIkSZIkSZKkHP4BSRrPJxMyHuEAAAAASUVORK5CYII=' },
		flash: { showIcon: true, thumbnail: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABL5JREFUeJzt3T2MVFUYxvE/xFWMEaMSC4yJRmJhVAo/UBOJhTFBgyCFMRYY6QQ0xtLCglAgfmtPYRT8LoyBxpiIstpoYbG4WFkYFowaI2yMMIzFdaM7HJh77znnfe+Z+/ySJ9vtvue+M5s8c2dnQURERERERERE6njIe4BYS70HKNgmYJ33EOLjLmAeeMR7ELG3CvgFOANc6TyLGFsB/AgMge+cZxFjFwNfUy1/COz2HUcsLQU+4r/lD4H7XScSU6+xePl/Uf1GkB54hsXLHwKfu04kZjYBA85+ADznOZTYWOj6o8sfAnc4ziUGFrp+aPm/o1dQJ9r/u34oH/uNJrmNdv1QtrpNJ1mFun4oN3gNKHmNdv1QfnKbTrIKdf1Q9ngNKPmcq+uH8pjTjJLJ+br+aM4AV/mMKTmcr+uH8r3PmHn19QWNFcCBf7/W9VmmWcRYna4fygMew0padbv+aP4GLnGYVxKr0/VDOegxrKRVt+uH8rzDvJJQk64fyt32I0sqTbp+KH8AF5hPLUk07fqhfGI+taFJfh2gTdcPUf8vUNuuH8qNxrNLpLZdP5SfjWeXBNp2/VDeMp5dIsV0/VA2244vMWK7figrTU8grcV2/VBmTE8graXo+qG8YXkIaWfce/hjUvzn/0y6lF1/NKeA5XZHkaZSdv1Qpu2OIm2k7Pqh7LA7ijSVuuuHstbsNNJIjq4/mhPAlNWBpL4cXT+U/VYH6oJSbgevorovb/G5PLr92zE5u34ot9gcS+rI2fVDmQOWmJxMxsrd9UPZa3IyqSV31w9li8nJZCyLrl9CXo29kCWy6Pol5EPKaWnJWHX9rmcaWBZ5LYuT675+aTlC/FvZi2Pd9bua48D1kdeyONZdv6uZB+6MvJbF8ej6XcwAeDjyWhbJo+t3MU/HXsgSqetXeSX2QpZIXb/KB/Tw3oO6fpVDqOv3Nkfo4f8cVNevoq7f48wDayKvZXHU9asMgI2R17JI6vpVnoq9kJLGFuyX/7LJyaSWfdguv5ddv6uWAMewW/5X9LDrd9lq7JY/SwFdv29vObrP6OccB9YBvxr9PKnpAPmf+SfRv5btpAuplpNz+QNgg9WBpJl7yf/s3251GGluJ3mX/5LdUaSNb8i3/PdR1++0y4DT5Fn+l8BFdkeRNjaSZ/mzwBWG50iuL68D5Oj/C13/twzfWxKbJe0zX12/INeQdvkD9CmiRXmCtA+AbbbjS6x3SLf8F41nlwTmSLP891DXL87NpFm+un6hniV++T9QeNfvs/3ELf8YcJ351JLEFNXn/rZd/kngdvOpJZm1tF/+aWC9/ciS0g7aPwC2OswriU3Tbvm7PYaVtJbT7vbvu6jrT4QNNF/+QdT1J8abNFv+YeByl0kli8PUX/4c6voT5Wqadf3bfMaUXB5HXb/X3kZdv9eOMn75L7hNJ1ndxPjl70Ndf2KN+/TRL1DXn2ifoq7fW1PAn5y761/rNpmYuIfw8k8AtzrO1WmT9JdBob/+GQCPAt8azyIODnH2s/9J14nEzKXAKRYvf5frRGJqPYuXvxd1/V55HXX9XpuhWv4M6vq9s5Jq+UdR1++lzajr99oe4EHvIcSP3tQhIiIiIiIiIlLDP9OLMKyBskQjAAAAAElFTkSuQmCC' },
		audio: { showIcon: false, thumbnail: 'data:image/png;base64,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' },
		htmlFive: { showIcon: false, thumbnail: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAByFJREFUeJztnVuIF1Ucxz+7XloXdjXvJZaRuSKFdEG7QEHSCpFWRC9FF3qQgjJK6KHbW0SFhOIl6sUuRkEPPXQzKTAyCrqoFPlgpGap2bq2pmbqbg9n/uzf+c/sf875z7nMzO8Dh909OzPnNzPf+Z1zfufMGRAEQRAEQRAEQRAEQRAEQRAEocy0eS5/AvB1LK8fuCaW93CU6lkTpV5gtUHZK4HXUvY/DdwC7I7ldwKbgUmx/PXAquj3nQllzTWwzwmjAyi/J5bXl7Dd5ITtJkc/uxP+l4XaTUzbfzWwNJb3NHBtwrZT6n43scUb7b4NCJglnC2AHmCFJ1usIQIYmdUotw+wFhjr0RYr+K4CQudC4BlgB7DIsy1WCFEA5wL7YnndI2z/EXBRLO/76Dj1XIFqYNboJxsrNLYtHCEKoB2YobH9cRpb64MJ2/0G/GVgzxhgqsF+hUDaAMn8Z/i/wiECSOYtYG9Cfj+wzrEtVhEBJHMUeDAh/3HgoGNbrBKiAPqBmbH0sgc7PgY21v29GdhgeKxtIySvXcsQG4GDNPYCBnwYAjyKChV3AstaOM78Ef7n9SEMUQAh0QcsB6bR2NMoBSKA5rzj2wCbhNgGEBziezi4HbgglncGFbSpZ0KU6jkSpSRmAqNieXtJDhB10hjoGQAOpxx7PI1RxnpbZqXsl8YeYEhzH0EQBEEQBEEwx0UvYApwnYNyysiXmA1hB8UCVDdHkn663OB6a+EiEFSq0TPHWL92LqqADuCEg3LKxhBqpPC0zUJceIB/8TeaV2QOY/nmg7uxAKkG9HFyzVwJ4E9H5ZSJUglAPIA+Th4aEUC4iAeoOKUSgLQB9CmVAMQD6CMCqDgigIrjpNp0NSewC4kG6jIOFUW1iisPcBQZD9BhAAc3H9xOC5eeQHacVZkuXww5iFpxQ4fHKP6LGfcDz2vuU1oB6HIOcCBvQxzTYbCPMwG4rAJMTmpa7la4x+QcnFWXobcBqioA8QARIgDLiADsY7LAlAggogwCEA8QYdIGmETjW75FYhwqCqpLKQVgclLtDC8KXURMPZizXoDLOEBtlqtumdPIJp6JhLfgxSUG+5xAhc6d4FIAQyhln6+5X9an6BtgtuaxQ8TpyKnrJ8ZmQ7AsQ86lFoDNYJAIwADxAOEhAoiRNZBSFgE4HTYvggDEA1hE2gDhUWoBiAdojgggxlSyTV4VARhQBAGMRkX5bBw7RMpyHomMQi0Fq7tWzjwfxrbIfPTP0/nnaFx7gDOkr8E7EkX8aFPQU8Fq+Bg8qcq8gKDnAdQQAdhDBJCCCCAdEUAKIgBL+BBAVaaHSyMwBfEA6VTCA9gcEQyJQgjAx1fDTD3A3LwNMWQXzVfwbEOtkq5LJQRgUs91AD/nbYghXcA/TbYxnc4uVUDgHKf5zQcz938GD98G8CGAk8DfHsrNg6ziNRFAH8mftbOKr3n0RfUCNgXg5Zr4+nTsQWCO5j7vAVsybLcMuEzbomxkbb+IAJpg0hD8CViTYbsrsSeA0nmAIlUBIcwOFgHkRFHnBooAckIE0IiXZfR8CaCo08PFA+RE2T1AIcLAUCwBdJFtzT3fApiAWt/QxrFzp0gCgGxeoA/4HBVxzIuTwGbgSIZtTdx/be2ESnEM/WnTCzSO3wksBlYCOzTLGQS2Ay8Bvai1frJyvcF59WkcvzT8iv6FWtJCedOBe4A3gD8Sjv07sAG4m9YmoNyZcOxmydtIp69IIKhqYJbmPq3cmAPAm1ECuBT1dA8Bn6IijXlQmB4A+BeALnnODPoxSnlTKAH4XFWrrHMDRQAZEQEMU0kBlHV6uAggIyYnfRWwHrgN6M7XnJYYD9wBvIrZUHTlYgAAN6DfXapPp4AvgKdQwnD1BTRQD85C4FlgK2qWcCvnstCh7cEwl9YuWjwdAt4G7gPOs2DvDOAB4F1U4CZP22dZsDd4JpLvRYyn7cCLwCLMYvMdqDjBSlR30aatOpHG0tCGWhHD5oWtpWPAh8ByoGcEm+ahvlT2CWoKuAvbvH5Q02W9mcQ+lGt1zR5gU5RGocYMeoGZHmzZhdmq4qXgO9w8ZSGnrS1fxRbwvb5+Ud8PyBOv18C3ACrZ/41RaQGIBxABVB4RQMWptACkDeD5GvgWwH7P5ftmCM/XwHcgCNRXxHpRwZibUKtrlJlDqClom6KfXquAEARQTzvq7d7FUboav9PW8uAU8BXDkccfUE++kIFu4HbgFcxmEftKu4C1wFLMPh0rpDAHeAT4ALVWj+8bXUsDwPvAQ8DF1s5eOIuxwI3AC8A23N7wQeBb4DnUiyBjLJ+rkIHpwL3ARlTXKu+bvh94HbgLs5c/BYe0oRqTT6LWFTKZd3AS+Ax4AvX1j9AazIIGXcCtwDrgF9Jv+k5gFXAz6t3C0lNVVc9muKt5iuE++W6PNgmCIAiCIAiCG/4HHV11IIe1OIUAAAAASUVORK5CYII=' }
	}

	this.files = [
		{ extension: '.xap', preview: this.types.video },
		{ extension: '.swf', preview: this.types.flash },
		{ extension: '.mp4', preview: this.types.video },
		{ extension: '.flv', preview: this.types.video },
		{ extension: '.wma', preview: this.types.audio },
		{ extension: '.mp3', preview: this.types.audio },
		{ extension: '.wmv', preview: this.types.audio },
		{ extension: '.jpg', preview: this.types.image },
		{ extension: '.png', preview: this.types.image },
		{ extension: '.tff', preview: this.types.image },
		{ extension: '.gif', preview: this.types.image },
		{ extension: '.jpeg', preview: this.types.image },
		{ extension: '.webm', preview: this.types.htmlFive },

	]

	this.addExtension = function (extension) {
		this.extensions.push();
	};
	this.removeExtension = function (extension) {
		this.extensions.splice(this.extensions.indexOf(extension), 1)
	};

	this.modifyTypeFile = function (name, thumbnail, showIcon) {
		this.types[name] = { showIcon: showIcon, thumbnail: thumbnail };
	}
	this.modifyTypeFile = function (name, thumbnail, showIcon) {
		createType(name, thumbnail, showIcon);
	}

	this.setFallbackImage = function (imgurl) {
		try { angular.module('dcbImgFallback') } catch (e) {
			throw "you must add the dcbImgFallback module, https://github.com/dcohenb/angular-img-fallback"
		}
		this.urlFallbackImage = imgurl;

	}
	this.getfallbackImage = function () {
		this.urlFallbackImage = "data:image/png;base64,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"
	}

	this.detectFile = function (file) {
		var typeFile = { preview: { thumbnail: 'data:image/png;base64,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', showIcon: true } }
		
		if(file && !angular.isObject(file))
			file = file.indexOf("data:image")? file: file.toLowerCase();
		else
			return typeFile;
		
		for (var i = 0; i < this.files.length ; i++) {
			if (file.indexOf(this.files[i].extension) > 0) {
				typeFile = this.files[i];
				break;
			}
		}
		return typeFile;
	}

	this.$get = function () {
		return this;
	};

})
.directive('filePreview',['$compile', 'filePreview',function ($compile, filePreview) {
	return {
		restrict: 'AE',
		scope: {
			width: '@',
			height: '@',
			urlFile: '=',
			thumbnail: '=',
			autoplay: '@',
		},
		link: function (scope, element, attrs) {
			scope.createdWidget = false;
			var watchlist = [];

			debugger;
			scope.urlFallbackImage = filePreview.urlFallbackImage;

			watchlist.push(scope.$watch("urlFile", function (r) {
				scope.createdWidget = false;
				scope.playing = false;
				
				scope.FileType = filePreview.detectFile(scope.urlFile);
				var player = detectPlayer(scope.urlFile);
				scope.watch = player.function;
				replacePlayer(player.template, element);

			}));


			scope.$on('$destroy', function () {
				var h = watchlist.length;
				for (var i = 0; i < h; i++) {
					watchlist[i]();
				}

			});

			Start()

			function Start() {
				var player = detectPlayer(scope.urlFile);
				replacePlayer(player.template, element);
			}
			function replacePlayer(html) {
				var e = $compile(html)(scope);
				element.css('max-height', scope.height + 'px');
				element.find('.contentPreview').html(e);

			}

			function play(objPlayer) {
				if (!scope.createdWidget) {
					var el = $compile(objPlayer)(scope);
					element.find('.player').append(el);
					scope.playing = true;
					scope.createdWidget = true;
				}
			}

			function detectPlayer(arquivo) {
				var player = {};


				try {
					if(!scope.FileType.preview.showIcon)
						scope.previewUrl = scope.FileType.preview.thumbnail;
					else
						scope.previewUrl = arquivo
				} catch (e) {
					if(!(!scope.FileType))
						console.log('error loading preview, check the config.')
				}


				player.function = function () {
					var w = scope.width;
					var h = scope.height;
					if (!(arquivo.indexOf('.jpg') > 0 || arquivo.indexOf('.jpeg') > 0 || arquivo.indexOf('.png') > 0 || arquivo.indexOf('.tff') > 0 || arquivo.indexOf('.gif') > 0))
						play(verifyPlayer(arquivo, w, h, true));

				}
				var template = [];

				template.push("<div class='preview' ng-click='watch()'>");
				template.push("<img ng-src=\"{{previewUrl}}\" style=\"height: {{height}}px\" border=\"0\" ng-hide='playing' fallback-src='{{urlFallbackImage}}'>");
				template.push("</div>");
				template.push("<div class='player'>");

				template.push("</div>");


				player.template = template.join('');

				return player;
			}
			function getTagVideoPlayer(file, w, h, autoplay) {
				autoplay = autoplay == true ? 'autoplay' : '';
				var objPlayer = [];

				objPlayer.push('<video controls  width="100%" height="100%" ' + autoplay + '>');
				objPlayer.push('<source src="' + file + '" type="video/mp4">');
				//objPlayer.push('<source src="movie.ogg" type="video/ogg">');
				objPlayer.push('Your browser does not support the video tag.');
				objPlayer.push('</video>');
				return objPlayer.join('');
			}
			function getswfPlayer(file, w, h) {
				var objPlayer = [];
				objPlayer.push("<object codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0\" width=\"" + w + "\" height=\"" + h + "\" ID=\"Shockwaveflash1\" VIEWASTEXT>");
				objPlayer.push("	<param name=\"movie\" value=\"" + file + "\">");
				objPlayer.push("	<param name=\"quality\" value=\"high\">");
				objPlayer.push("	<param name=\"menu\" value=\"false\">");
				objPlayer.push("	<param name=\"scale\" value=\"exactfit\">");
				objPlayer.push(" <param name=\"wmode\" value=\"gpu\" />");
				objPlayer.push("	<param name=\"loop\" value=\"false\">");
				objPlayer.push("<!--[if !IE]>-->");
				objPlayer.push("<object type=\"application/x-shockwave-flash\" data=\"" + file + "\" width=\"" + w + "\" height=\"" + h + "\">");
				objPlayer.push("	<param name=\"movie\" value=\"" + file + "\">");
				objPlayer.push("	<param name=\"quality\" value=\"high\">");
				objPlayer.push("	<param name=\"menu\" value=\"false\">");
				objPlayer.push("	<param name=\"scale\" value=\"exactfit\">");
				objPlayer.push(" <param name=\"wmode\" value=\"gpu\" />");
				objPlayer.push("	<param name=\"loop\" value=\"false\">");
				objPlayer.push("<!--<![endif]-->");
				objPlayer.push("</object>");
				return objPlayer.join('');


			}
			function getFlashPlayer(file, w, h) {
				var objPlayer = [];
				objPlayer.push("<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0' draggable='false'")
				objPlayer.push("width='" + w + "' height='" + h + "' id='flvPlayer' align='middle'>")
				objPlayer.push("	<param name='allowScriptAccess' value='sameDomain' />")
				objPlayer.push("	<param name='allowFullScreen' value='false' />")
				objPlayer.push("	<param name='movie' value='swf/flvPlayer.swf' />")
				objPlayer.push("	<param name=\"wmode\" value=\"opaque\" />")
				objPlayer.push("	<param name='quality' value='high' />")
				objPlayer.push("	<param name='bgcolor' value='#ffffff' />")
				objPlayer.push("	<param name='flashVars' value='urlVideo=" + file + "' />")
				objPlayer.push("	<embed flashVars='urlVideo=" + file + "'  src='swf/flvPlayer.swf' quality='high' bgcolor='#ffffff' width='" + w + "' height='" + h + "'")
				objPlayer.push("		name='flvPlayer'  align='middle' allowscriptaccess='sameDomain' allowfullscreen='true'")
				objPlayer.push("		type='application/x-shockwave-flash' pluginspage='http://www.adobe.com/go/getflashplayer_br' />")
				objPlayer.push("</object>")
				return objPlayer.join('');
			}
			function verifyPlayer(file, w, h, autoplay) {
				if (file.indexOf('.swf') > 0) {
					return getswfPlayer(file, w, h);
				} else if (file.indexOf('.flv') > 0) {
					return getFlashPlayer(file, w, h);

				}
				else {
					var videoElement = document.createElement('video');

					if (!videoElement.canPlayType)
						return getFlashPlayer(file, w, h);
					else
						return getTagVideoPlayer(file, w, h, autoplay);
				}
			}

		}
	};

	function checkTypeOfFile() {

	}
}]).config(['filePreviewProvider', function (filePreviewProvider) {
	filePreviewProvider
	  .$get();
}])
;
