package com.example.server;

import com.mysql.fabric.xmlrpc.base.Array;

public class EventsTagsTransfer {

	private int eventsid;
	private Array eventsTags[];
	
	
	public static void sortEventsTags(long eventsid, Array eventsTags[]) {
		for (int i=0; i <= eventsTags.length; i++) {
			i++;
			System.out.println(eventsid + "" +eventsTags[i]);
			
		}
	}
	
}
