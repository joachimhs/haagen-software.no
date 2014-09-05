EF.Page = DS.Model.extend({
    title: DS.attr('string'),
    route: DS.attr('string'),
    sortIndex: DS.attr('number'),
    topMenu: DS.attr('boolean'),
    content: DS.attr('string')
});