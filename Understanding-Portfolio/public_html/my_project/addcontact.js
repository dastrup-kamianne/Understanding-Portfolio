function addContact(){
                var fname = document.getElementById("firstname");
                var xmlDoc,oldNode,newNode,x;
                function loadXMLDoc("contacts.xml"){
                    if (window.XMLHttpRequest)
                    {
                        xhttp = new XMLHttpRequest();
                    }
                    else
                    {
                        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
                    }
                    xhttp.opn("GET","contacts.xml",true);
                    xhttp.send();
                    return xhttp.responseXML;
                    }    
                                
                oldNode = xmlDoc.getElementsByTagName("CONTACT")[0];
                newNode = oldNode.cloneNode(true);
                xmlDoc.documentElement.appendChild(newNode);
                
                x = xmlDoc.getElementsByTagName("FIRSTNAME")[CONTACT.length - 1].childNodes[CONTACT.length - 1];
                x.nodeValue = fname;
            }
            
            
            function loadXMLDoc(){
                var xmlhttp;
                var txt, xx, x, i;
                if (window.XMLHttpRequest)
                {
                    xmlhttp = new XMLHttpRequest();
                }
                else
                {
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange = function()
                {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
                    {
                        x=xmlhttp.responseXML.documentElement.getElementsByTagName("CONTACT");
                        for (i=0; i<x.length; i++)
                        {
                           xx = x[i].getElementsByTagName("FIRSTNAME"); 
                            {
                                try
                                {
                                    txt = txt + xx[0].firstChild.nodeValue + "&nbsp;";
                                }
                                catch (er)
                                {
                                    txt = txt + "<br>";
                                }
                            }
                            xx = x[i].getElementsByTagName("LASTNAME"); 
                            {
                                try
                                {
                                    txt = txt + "<br>" + xx[0].firstChild.nodeValue + "&nbsp;";
                                }
                                catch (er)
                                {
                                    txt = txt + "<br>";
                                }
                            }
                        }
                        document.getElementById("contactlist").innerHTML = txt;
            
                    }
                }
                xmlhttp.open("GET", "contacts.xml", true);
                xmlhttp.send();
            }