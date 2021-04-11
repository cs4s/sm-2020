---
layout: default
title: Resources - CS4S ScratchMaths Workshop @ UON 2020
---

<div class="container">
    <div class="showcase">
        <div class="container">
            <h1>Resources</h1>

            <p>If you are interested in finding out more about Coding, Computational Thinking, Computer Science and the Digital Technologies Curriculum, we have provided some resources for you to explore.</p>

            <h2>ScratchMaths modules</h2>

            <p>In the workshop, we will explore Modules 1 and 3 from UCL ScratchMaths but there are six modules in the curriculum materials. We have linked these modules in the table below.</p>

            <table class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Module</th>
                        <th>Links</th>
                    </tr>
                </thead>
                <tbody>
                    {% for module in site.data.modules%}
                    <tr>
                        <td>{{ module.title }}</td>
                        <td>
                            <a href="{{ module.details_link }}">Details</a>
                            <span>&nbsp;|&nbsp;</span>
                            <a href="{{ module.download_link}}">Download Materials (Zip)</a>
                        </td>
                    </tr>
                    {% endfor %}
                </tbody>
            </table>
            
            <p></p>
            {% capture links_websites %}{% include_relative tables/links_websites.md %}{% endcapture %}
            {{ links_websites | markdownify }}
            {% capture links_online_courses %}{% include_relative tables/links_online_courses.md %}{% endcapture %}
            {{ links_online_courses| markdownify }}
            {% capture links_lessons %}{% include_relative tables/links_lessons.md %}{% endcapture %}
            {{ links_lessons | markdownify }}
        </div>
    </div>
</div>